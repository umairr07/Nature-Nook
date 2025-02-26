import { Link, useLocation } from "react-router-dom";
import Navlinks from "./Navlinks";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { handleSuccess } from "../utils/Toast";
import logo from "../images/Logo/wmremove-transformed.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();

  const { user } = useContext(UserContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleLogout = async () => {};

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white-400 shadow-md">
        <div className="flex justify-between flex-wrap lg:px-10 sm:px-3 py-6 border-b border-white-400 items-center">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" className="w-40" />
            </Link>
          </div>

          <div className="sm:hidden lg:flex md:flex">
            <Navlinks />
          </div>

          <div className="flex items-center gap-2 justify-center">
            {user ? (
              <div className="flex items-center gap-5">
                {location.pathname === "/cart" ? (
                  <Link to={"/cart"}>
                    <MdOutlineShoppingCart
                      size={30}
                      className="cursor-pointer text-green-400 underline"
                    />
                  </Link>
                ) : (
                  <Link to={"/cart"}>
                    <MdOutlineShoppingCart
                      size={30}
                      className="cursor-pointer text-grayForPageHeading hover:text-green-400 transition-all"
                    />
                  </Link>
                )}
                {/* <div className="relative">
                  <p
                    onClick={toggleProfile}
                    className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-white-400 text-xl font-semibold uppercase transition-all duration-200 ease-in-out hover:bg-green-600"
                  >
                    {user?.name?.slice(0, 1).toUpperCase()}
                  </p>

                  {isProfile && (
                    <ul className="absolute z-10 right-5 mt-2 w-56 bg-white-400 border border-gray-300 rounded-lg shadow-lg p-3 text-grayForPageHeading">
                      <li
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer "
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  )}
                </div> */}
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600 text-white-400">
                  <Link to={"/signup"}>Signup</Link>
                </div>
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600  text-white-400">
                  <Link to={"/login"}>Login</Link>
                </div>
              </div>
            )}

            <div className="lg:hidden md:hidden sm:mt-2">
              <button onClick={handleToggle}>
                {isOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-56 bg-white-400 shadow-xl flex flex-col justify-start items-start py-5 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          className="ml-auto mr-4 mt-4 text-gray-500 hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          <BiX size={30} />
        </button>
        <div className="px-4 w-full" onClick={() => setIsOpen(false)}>
          <Navlinks />
        </div>
      </div>
    </>
  );
};

export default Header;
