import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ({ toggleLogin }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to store Selector using a Selector 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-red-500 hover:bg-cream-[700]">
      <div className="flex items-center">
        <img className="w-24 h-auto object-contain rounded-2xl shadow-sm" src={LOGO_URL} alt="logo" />
      </div>

      
        <div className="flex items-center gap-6 text-gray-700 font-medium text-lg">
          <ul className="flex items-center">
            Online: <span className="ml-1">{onlineStatus ? "✅" : "🔴"}</span>
          
          <li className="hover:text-black px-4"><Link to="/">Home</Link></li>
          <li className="hover:text-black px-4" ><Link to="/about">About</Link></li>
          <li className="hover:text-black px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="hover:text-black px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold text-xl hover:text-black">
          <Link to="/Cart">Cart 🛒 ({cartItems.length})</Link> 
            </li>

          {/* Login/Logout Button now updates context */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all shadow-md"
             onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            >
          
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
      
    </ul>
      </div>
    </div>
  );
};

export default Header;
