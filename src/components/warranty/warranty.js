import React, { Component } from "react";

class Warranty extends Component{
    render(){
        return(
            <div>
               <h1 className="offset-2 mt-5">Warranty</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addwarranty"><button className="btn btn-primary">Add Warranty</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Warraty Time Period</th>
                <th scope="col">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <button className="btn btn-primary">test</button>
                <button className="btn btn-primary">test</button>
                
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                
                <button className="btn btn-primary">test</button>
                <button className="btn btn-primary">test</button>
                
              </tr>
              
            </tbody>
          </table>
        </div>
            </div>
        )
    }

}
export default Warranty;