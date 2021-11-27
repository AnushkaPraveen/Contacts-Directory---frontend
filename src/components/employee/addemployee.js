import React, { Component } from "react";

class Addemployee extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Employee</h1>
          <div className="row mt-5 mb-3">
            <h3>Employee Details</h3>
            <div className="col-6">
                <label>NIC</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Email</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Telephone</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Address</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          
          </div>
          <button className="btn btn-success mt-5">Create</button>
          <a href="./employee"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addemployee;
