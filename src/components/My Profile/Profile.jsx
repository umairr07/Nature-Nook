import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white border border-gray-300 rounded-xl shadow-xl w-full lg:max-w-4xl sm:max-w-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Icon */}
          <div className="w-20 h-20 bg-green-600 text-white text-2xl font-semibold flex items-center justify-center rounded-full">
            {user?.name?.slice(0, 1).toUpperCase()}
          </div>

          {/* User Name */}
          <h2 className="text-3xl font-bold text-gray-800">{user?.name}</h2>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Email */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-lg font-medium text-green-600">Email</h3>
            <p className="text-gray-700 mt-2">{user?.email}</p>
          </div>

          {/* Add More Sections Here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
