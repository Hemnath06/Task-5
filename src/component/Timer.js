import React, { Component } from "react";
import "./timer.css";


export default class App extends Component{
        constructor(){
            super();
            this.state = {
                count: 0
            }
        }  

        increment(){
            this.setState({
                count: this.state.count+1
            })
        }

        decrement(){
            this.setState({
                count: this.state.count-1
            })
        }

        reset(){
            this.setState({
                count: 0
            })
        }

        render(){
            return(
                <div class="tim">
                    <h1>Count: {this.state.count}</h1>
                    <button style={{backgroundColor: "orange"}} onClick={()=>this.increment()}>Increment</button><br></br>
                    <button style={{backgroundColor: "#fff"}} onClick={()=>this.decrement()}>Decrement</button><br></br>
                    <button style={{backgroundColor: "green"}} onClick={()=>this.reset()}>Reset</button><br></br>
                </div>
            )
        }
}