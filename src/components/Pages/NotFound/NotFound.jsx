import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-green-400 text-white-400 rounded hover:bg-green-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
