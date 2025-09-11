//import User from "./User";
import React from "react";
import UserClass from "./UserClass";  

class About extends React.Component {
    render(){
        return (
        <div className="about-container">
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Sakshi Singh(ClassBased)"} location={"Ghaziabad"} />
        </div>
    );
};
};
export default About;