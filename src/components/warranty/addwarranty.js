import React, { Component } from "react";

class Addwarranty extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Warranty</h1>
          <div className="row mt-5 mb-3 ">
            <h3>Warranty Details</h3>
            <div className="col-6">
                <label>Product Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Category</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Brand</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Customer Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Email</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Phone</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Address</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Warranty Time Period</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Purchurse Date</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          
          </div>
          <button className="btn btn-success mt-5">Create</button>
          <a href="./warranty"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addwarranty;
