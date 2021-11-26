import React, { Component } from "react";

class Service extends Component{
    render(){
        return(
            <div>
              <h1 className="offset-2 mt-5">Services</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addservice"><button className="btn btn-primary">Add Service</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Service Item</th>
                <th scope="col">Assigned Employee</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Telephone</th>
                <th scope="col">Customer Address</th>
                <th scope="col">Fee</th>
                <th scope="col">Special Note</th>

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
export default Service;