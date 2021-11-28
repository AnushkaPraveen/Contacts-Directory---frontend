import React, { Component } from "react";
import axios from "axios";

class Addwarranty extends Component {
  constructor(props){
    super(props)
    this.state={
      warrantyId:'',
      product_name:'',
      email:'',
      customer_name:'',
      address:'',
      phone:'',
      warranty_time:'',
      purchase:''
   
    }
  }
  onChangePname=(e)=>{
    this.setState({
      product_name:e.target.value
    })
  }
  onChangeCname=(e)=>{
    this.setState({
      customer_name:e.target.value
    })
  }
  onChangeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  onChangePhone=(e)=>{
    this.setState({
      phone:e.target.value
    })
  }
  onChangeAddress=(e)=>{
    this.setState({
      address:e.target.value
    })
  }
  onChangeTime=(e)=>{
    this.setState({
      warranty_time:e.target.value
    })
  }
  onChangePurchase=(e)=>{
    this.setState({
      purchase:e.target.value
    })
  }


  onClickHandler=()=>{
    const warrantyDetails={
      product_name:this.state.product_name,
      email:this.state.email,
      customer_name:this.state.customer_name,
      address:this.state.address,
      phone:this.state.phone,
      warranty_time:this.state.warranty_time,
      purchase:this.state.purchase
    }
    axios.post("http://localhost:4000/createwarranty",warrantyDetails)
    this.setState({
      warrantyId:'',
      product_name:'',
      email:'',
      customer_name:'',
      address:'',
      phone:'',
      warranty_time:'',
      purchase:''
    })
  }


  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Warranty</h1>
          <div className="row mt-5 mb-3 ">
            <h3>Warranty Details</h3>
            <div className="col-6">
                <label>Product Name</label>
            <input className="form-control" type="text" onChange={this.onChangePname}/>
            </div>
            <div className="col-6">
            <label>Customer Name</label>
            <input className="form-control" type="text" onChange={this.onChangeCname}/>
            </div>
          </div>
          
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Email</label>
            <input className="form-control" type="text" onChange={this.onChangeEmail}/>
            </div>
            <div className="col-6">
            <label>Phone</label>
            <input className="form-control" type="text" onChange={this.onChangePhone}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Address</label>
            <input className="form-control" type="text" onChange={this.onChangeAddress}/>
            </div>
            <div className="col-6">
            <label>Warranty Time Period</label>
            <input className="form-control" type="text" onChange={this.onChangeTime}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Purchurse Date</label>
            <input className="form-control" type="text" onChange={this.onChangePurchase}/>
            </div>
          
          </div>
          <button className="btn btn-success mt-5" onClick={this.onClickHandler}>Create</button>
          <a href="./warranty"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addwarranty;
