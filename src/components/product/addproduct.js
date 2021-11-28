import React, { Component } from "react";
import axios from "axios";

class Addproduct extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      category:'',
      price:'',
      brand:'',
    }
  }




  onChangeName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  onChangePrice=(e)=>{
    this.setState({
      price:e.target.value
    })
  }
  onChangeCategory=(e)=>{
    this.setState({
      category:e.target.value
    })
  }
  onChangeBrand=(e)=>{
    this.setState({
      brand:e.target.value
    })
  }

  onClickHandler=()=>{
    const productDetails={
      name:this.state.name,
     price:this.state.price,
     category:this.state.category,
     brand:this.state.brand
    }
    axios.post("http://localhost:4000/createproduct",productDetails)
    this.setState({
      nic:'',
      email:'',
      name:'',
      address:''
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Create Product</h1>
          <div className="row mt-5 mb-5">
            <h3>Product Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text" onChange={this.onChangeName}/>
            </div>
            <div className="col-6">
            <label>Category</label>
            <input className="form-control" type="text" onChange={this.onChangeCategory}/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Price</label>
            <input className="form-control" type="text" onChange={this.onChangePrice}/>
            </div>
            <div className="col-6">
            <label>Brand</label>
            <input className="form-control" type="text" onChange={this.onChangeBrand}/>
            </div>
          </div>
          <button className="btn btn-success mt-5" onClick={this.onClickHandler}>Create</button>
          <a href="./product"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addproduct;
