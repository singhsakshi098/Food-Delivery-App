import React from "react";
//IN THE CLASS-BASED COMPONENT
class UserClass extends React.Component{
    // whenever the class loads the constructor will be called first then render function will be called
    constructor(props){
        super(props);

        //console.log("child constructor");

    } 
   
    render(){
        //console.log("child render");

        //AFTER WRITTING CONST we dont need to use this.props.name
        const {name , location } = this.props;
        return (
             <div className="user-card">                
              <h2>Name: {name}</h2>
              <h3>Location :{this.props.location}</h3>
              <h4>Contact : singhsakshi098</h4>
        </div>
        );

    }
}
export default UserClass;