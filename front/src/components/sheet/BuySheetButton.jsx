import React from "react";
import { axiosClient } from "../../utils/axios";
import { useGetUserQuery } from "../../querys/useUserQuery";
import { useState } from "react";
import { toast } from "react-toastify";

const BuySheetButton = ({ sheet }) => {
  const [loading, setLoading] = useState(false);

  const { data: userData } = useGetUserQuery();

  const verifyPaymentHandler = async ({ data, order }) => {
    const res = await axiosClient.post(`/purchase/${sheet.id}/verify-payment`, {
      ...data,
      ...order,
      userId: userData?.user?.id,
    });

    return res.data.data;
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.post(`/purchase/buy/${sheet.id}`);
      const data = res.data.data;

      const keyres = await axiosClient.get("/purchase/razorpay/key");

      const options = {
        key: keyres.data.data.key, // Enter the Key ID generated from the Dashboard
        // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "hypecoding",
        description:
          "Purchase this sheet to unlock all questions and solutions.",
        image: "./react.svg",
        order_id: data.order.id, // Pass the `id` obtained in the response of Step 1
        //   callback_url: `${import.meta.env.VITE_BACKEND_BASE_URL}/purchase/${
        //     sheet.id
        //   }/verify-payment`,
        handler: (res) =>
          verifyPaymentHandler({ data: res, order: data.order }),
        prefill: {
          name: userData?.user?.fullname,
          email: userData?.user?.email,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();

      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.messages || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="btn btn-primary btn-md"
      disabled={loading}
    >
      {loading ? "Processing..." : "Buy Sheet"}
    </button>
  );
};

export default BuySheetButton;
