import React, { Component } from "react";

class Addsupplier extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Supplier</h1>
          <div className="row mt-5 mb-3">
            <h3>Supplier Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Email</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Telephone</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Address</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Product Item</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Brand</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <button className="btn btn-success mt-5">Create</button>
          <a href="./supplier"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addsupplier;
