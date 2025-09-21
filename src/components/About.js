//import User from "./User";
import React from "react";
import UserClass from "./UserClass";  
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);
        //console.log("PARENT constructor");
    }
     componentDidMount(){
       // console.log("componentDidMount");
    }
    render(){
      //  console.log("PARENT render");
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
