import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    //when we need to do something dynamically normal js variable is not used ; then state variable comes into picture
    // the whole react component is re-rendering when we click on the login button
    const btnName ="Login";

    const [btnNameReact , setbtnNameReact] = useState("Login");

    console.log("Body-rendered");

   
    return (
        <div className="header">
            <div className="logo container">
                <img 
                src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
                alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to = "/">Home </Link> </li>                        
                    <li>
                       <Link to = "/About">About</Link> </li>
                    <li>
                        <Link to = "/contact">ContactUS</Link></li>
                    <li>cart</li>

                    <button className="login" onClick = { () =>
                    {                         
                       btnNameReact === ("Login") ? setbtnNameReact("Logout") :setbtnNameReact("Login");
                     }

                    }>
                         {btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;
