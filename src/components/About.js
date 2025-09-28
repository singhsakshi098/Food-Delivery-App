import React, { Component } from "react";
import UserClass from "./UserClass";  
import { UserContext } from "../utils/UserContext";

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1>About</h1>
                <div>
                    Logged In User:{" "}
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Sakshi Singh(ClassBased)"} location={"Ghaziabad"} />
            </div>
        );
    }
}

export default About;
