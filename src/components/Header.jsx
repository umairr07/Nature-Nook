import { Link, useLocation } from "react-router-dom";
import Navlinks from "./Navlinks";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../images/Logo/wmremove-transformed.png";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn } = useUser();

  const { cartCount } = useContext(CartContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white-400 shadow-md">
        <div className="flex justify-between flex-wrap lg:px-10 sm:px-3 py-6 border-b border-white-400 items-center">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="w-40" />
            </Link>
          </div>

          <div className="sm:hidden lg:flex md:flex">
            <Navlinks />
          </div>

          <div className="flex items-center gap-2 justify-center">
            {isSignedIn ? (
              <div className="flex items-center gap-5">
                <Link to={"/cart"}>
                  <MdOutlineShoppingCart
                    size={27}
                    className={`cursor-pointer ${
                      location.pathname === "/cart"
                        ? "text-green-400 underline"
                        : "text-grayForPageHeading hover:text-green-400 transition-all"
                    }`}
                  />
                  {cartCount > 0 && (
                    <span className="absolute top-5 right-20 bg-red-500 text-white-400 w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600 text-white-400">
                  <SignUpButton mode="modal" />
                </div>
                <div className="lg:px-4 lg:py-2 sm:px-2 sm:py-[3px] lg:text-[16px] sm:text-[14px] rounded-3xl bg-green-400 hover:bg-green-600 text-white-400">
                  <SignInButton mode="modal" />
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
