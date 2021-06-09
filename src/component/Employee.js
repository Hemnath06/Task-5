import React from "react";
import "./emp.css";


var Employee = (props) =>{
     return(
         <div className="App">
             <table border="10" cellPadding="5px" cellSpacing="5px">
                 <tr>
                     <td>Employee id</td>
                     <td>{props.id}</td>
                 </tr>
                <tr>
                     <td>Rollno</td>
                     <td>{props.no}</td>
                </tr>
                <tr>
                      <td>Company</td>
                      <td>{props.company}</td>
                </tr>
                <tr>
                     <td>Designation</td>
                     <td>{props.des}</td>
                </tr>
                <tr>
                     <td>Rating</td>
                     <td>{props.rating}</td>
                </tr>
                     
             </table><br></br>
        </div>
     );
}

export default Employee;