import React, { Component } from "react";
import "./App.css";
import Employee from "./component/Employee.js";
import Timer from "./component/Timer.js";

export default class App extends Component{
  constructor(){
    super();
    this.state={
      Com: ""
    }
  }

  change(){
    this.setState({
      Com: <div>
            
      <h1>Employee Details</h1>
      <Employee id="2353" no="01" company="Hakuna Matata" des="ASE" rating="4" />
      <Employee id="3262" no="02" company="Hakuna Matata" des="ASE" rating="5" />
      <Employee id="8782" no="03" company="Hakuna Matata" des="ASE" rating="2" />
      <Employee id="9293" no="04" company="Hakuna Matata" des="ASE" rating="6" />
      <Employee id="3622" no="05" company="Hakuna Matata" des="ASE" rating="2" />
  
    </div>
    }
    )
  }

  counter(){
    this.setState({
      Com: <Timer />
    })
  }

  render(){
    return(
      <div className="App">
           <h2>Click the Option</h2>
           <button style={{color: "#fff",
           backgroundColor: "red"}} onClick={()=>this.change()}>Employee</button>
           <button style={{color: "#000",
           backgroundColor: "yellow"}} onClick={()=>this.counter()}>Counter</button>
           {this.state.Com}
      </div>
    );
  }
}