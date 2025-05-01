import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const { state } = useLocation();
  const { cartItems } = state;
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  const handlePurchase = async () => {
    const stripe = await stripePromise;

    const res = await fetch(
      "https://nature-nook-backend.onrender.com/api/v1/order/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      }
    );

    const data = await res.json();
    console.log("Stripe session response:", data); // 👈 What does this show?

    if (data.id) {
      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      console.error("❌ Stripe session creation failed:", data);
    }
  };

  return (
    <div className="w-full mx-auto p-6 text-grayForPageHeading">
      <div className="lg:w-[70%] m-auto">
        {/* Cart Summary */}
        <div className="bg-white-400 p-6 border border-gray-400 rounded-md shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="lg:text-2xl sm:text-xl font-semibold mb-4">
              Cart Summary
            </h2>
            <button
              className="text-sm text-green-600"
              onClick={() => navigate("/cart")}
            >
              Edit Cart
            </button>
          </div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex gap-3 border p-2">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.discountedPrice * item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-6">
              <h3 className="font-medium">Total</h3>
              <p className="text-lg font-semibold">₹{totalAmount}</p>
            </div>
            <center>
              <button
                onClick={handlePurchase}
                className="mt-4 bg-green-400 text-white-400 px-10 py-2 rounded hover:bg-green-600"
              >
                Purchase Now
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
