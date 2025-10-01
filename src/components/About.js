import React, { Component } from "react";
import UserClass from "./UserClass";  
import { UserContext } from "../utils/UserContext";

class About extends Component {
    render() {
        return (
            <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
                <div className="text-lg text-gray-700 mb-4">
                    Logged In User:{" "}
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <span className="font-semibold text-blue-600">{loggedInUser}</span>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2 className="text-xl text-gray-600 mb-6">
                    This is Namaste React Web Series
                </h2>
                <div className="mt-4">
                    <UserClass name={"Sakshi Singh(ClassBased)"} location={"Ghaziabad"} />
                </div>
            </div>
        );
    }
}

export default About;
