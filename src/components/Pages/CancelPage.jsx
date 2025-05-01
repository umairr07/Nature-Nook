// CancelPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled</h1>
      <p className="mt-2 text-gray-600">Your payment was not completed.</p>
      <button
        className="mt-4 bg-green-400 text-white-400 px-10 py-2 rounded hover:bg-green-600 transition"
        onClick={() => navigate("/cart")}
      >
        Back To Cart
      </button>
    </div>
  );
};

export default CancelPage;
