import React, { Component } from "react";

class Supplier extends Component{
    render(){
        return(
            <div>
               <h1 className="offset-2 mt-5">Suppliers</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addsupplier"><button className="btn btn-primary">Add Supplier</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
                <th scope="col">Address</th>
                <th scope="col">Product item</th>
                <th scope="col">Brand</th>
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
export default Supplier;