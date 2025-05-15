import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginAndSignup from "./pages/LoginAndSignup";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/Navbar";

import { useThemeStore } from "./store/themeStore";
import { useGetUserQuery } from "./querys/useUserQuery";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  const { theme } = useThemeStore();
  const { data } = useGetUserQuery({
    onError: (err) => {
      if (err.response?.status === 401) {
        // forced logout / redirect
        window.location.href = "/login";
      }
    },
  });
  const user = data?.user;

  return (
    <>
      <div data-theme={theme}>
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route
            path="/login"
            element={
              !user ? <LoginAndSignup type="login" /> : <Navigate to="/" />
            }
          />
          <Route
            path="/signup"
            element={
              !user ? <LoginAndSignup type="signup" /> : <Navigate to="/" />
            }
          />
          <Route
            path="/verify-email"
            element={!user ? <VerifyEmail /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={user ? <Navbar /> : <Navigate to="/login" />}
          >
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="theme" element={<Theme />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
