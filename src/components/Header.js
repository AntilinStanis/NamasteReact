import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const cart = useSelector((store)=>store.cart.items);

  const data = useContext(UserContext);
  console.log(data);
  return (
    <div
      className="flex justify-between sticky top-0 z-50 
  backdrop-blur-md bg-white/30 
  dark:bg-gray-800/30 
  border-b border-white/20 dark:border-gray-800/40 
  backdrop-saturate-150 shadow-sm"
    >
      <div className="logo-container">
        <img className="w-23 h-23" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-5 cursor-pointer">
          <li className="px-4">
            your are {isOnline ? "🟢online" : "🔴offline"} now!
          </li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="px-4 font-bold"><Link to="/cart">Cart({cart.length}) </Link> </li>
          <button
            className="cursor-pointer"
            onClick={() => {

              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
