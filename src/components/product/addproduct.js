import React, { Component } from "react";

class Addproduct extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Create Product</h1>
          <div className="row mt-5 mb-5">
            <h3>Product Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Category</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Price</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Brand</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <button className="btn btn-success mt-5">Create</button>
          <a href="./product"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addproduct;
