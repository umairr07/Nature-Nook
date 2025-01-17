import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { handleSuccess } from "../../utils/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleSuccess("Logged in Successfull!!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-50 flex items-center justify-center">
      <div className="bg-white-400 shadow-lg rounded-lg p-8 lg:w-full md:w-full  sm:w-[85%] max-w-md">
        <h2 className="lg:text-3xl md:text-3xl sm:text-2xl font-semibold text-center text-green-600 mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg lg:p-3 md:p-3 sm:p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg lg:p-3 md:p-3 sm:p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white-400 lg:py-3 lg:px-4 sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg font-medium hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
