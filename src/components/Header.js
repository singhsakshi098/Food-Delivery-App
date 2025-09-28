import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = ({ toggleLogin }) => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-red-500 hover:bg-cream-[700]">
      <div className="flex items-center">
        <img className="w-24 h-auto object-contain rounded-2xl shadow-sm" src={LOGO_URL} alt="logo" />
      </div>

      <nav>
        <ul className="flex items-center gap-6 text-gray-700 font-medium text-lg">
          <li className="flex items-center">
            Online: <span className="ml-1">{onlineStatus ? "✅" : "⚫"}</span>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart 🛒</li>

          {/* Login/Logout Button now updates context */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all shadow-md"
            onClick={toggleLogin}
          >
            {loggedInUser === "Default User" ? "Login" : "Logout"}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
