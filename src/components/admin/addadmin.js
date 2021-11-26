import React, { Component } from "react";

class Addadmin extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Admin</h1>
          <div className="row mt-5 mb-5">
            <h3>Admin Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Email</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
         
          <button className="btn btn-success mt-5">Add</button>
          <a href="./admin"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addadmin;
