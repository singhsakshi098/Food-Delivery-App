import React from "react";
//IN THE CLASS-BASED COMPONENT
class UserClass extends React.Component{
    // whenever the class loads the constructor will be called first then render function will be called
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:2,
        };
    } 
    render(){
        //AFTER WRITTING CONST we dont need to use this.props.name
        const {name , location } = this.props;
        const {count , count2} =this.state;
        return (
             <div className="user-card">
                <h1>count:{count}</h1>
                <button onClick= {() => {
                    //never directlyy update the state variable directly > it will give inconsistency in your program
                    this.setState({
                        count: this.state.count+1
                    });
                }}
                > INCREAMENT COUNT
                </button>
              <h2>Name: {name}</h2>
              <h3>Location :{this.props.location}</h3>
              <h4>Contact : singhsakshi098</h4>
        </div>
        );

    }
}
export default UserClass;