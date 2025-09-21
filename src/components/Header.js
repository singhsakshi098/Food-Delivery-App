import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-red-500 hover:bg-cream-[700]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-24 h-auto object-contain rounded-2xl shadow-sm "
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-gray-700 font-medium text-lg">
          <li className="flex items-center">
            Online:{" "}
            <span className="ml-1">{onlineStatus ? "✅" : "⚫"}</span>
          </li>

          <li className="hover:text-green-600 transition-colors font-medium text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600 transition-colors font-medium text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-600 transition-colors font-medium text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-green-600 transition-colors font-medium text-lg">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="hover:text-green-600 transition-colors cursor-pointer font-medium text-lg">
            Cart 🛒
          </li>

          {/* Login/Logout Button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all shadow-md"
            onClick={() =>
              setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
