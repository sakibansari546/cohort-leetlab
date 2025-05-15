import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
};

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const originalReq = err.config;
    if (
      err.response?.status === 401 &&
      // err.name == "TokenExpiredError" &&
      !originalReq._retry
    ) {
      if (isRefreshing) {
        // queue all the incoming requests while refreshing
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalReq.headers["Authorization"] = `Bearer ${token}`;
            return axiosClient(originalReq);
          })
          .catch((e) => Promise.reject(e));
      }

      originalReq._retry = true;
      isRefreshing = true;

      // call refresh endpoint (cookie will be sent automatically)
      return new Promise((resolve, reject) => {
        axiosClient
          .post("/auth/refresh") // backend handler you showed
          .then(({ data }) => {
            // data.data.accessToken contains new token
            const newToken = data.data.accessToken;

            // update default header for future requests
            axiosClient.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${newToken}`;
            originalReq.headers["Authorization"] = `Bearer ${newToken}`;

            processQueue(null, newToken);
            resolve(axiosClient(originalReq));
          })
          .catch((refreshError) => {
            processQueue(refreshError, null);
            reject(refreshError);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(err);
  }
);
