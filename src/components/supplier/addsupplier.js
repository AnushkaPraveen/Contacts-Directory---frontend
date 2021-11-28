import React, { Component } from "react";
import axios from "axios";

class Addsupplier extends Component {
  constructor(props){
    super(props)
    this.state={
     supplierId:'',
      name:'',
      email:'',
     product_item:'',
      address:'',
      telephone:'',
    brand:''
   
    }
  }

  onChangeName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  onChangeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  onChangeTelephone=(e)=>{
    this.setState({
      telephone:e.target.value
    })
  }
  onChangeAddress=(e)=>{
    this.setState({
      address:e.target.value
    })
  }
  onChangePname=(e)=>{
    this.setState({
      product_item:e.target.value
    })
  }
  onChangeBrand=(e)=>{
    this.setState({
      brand:e.target.value
    })
  }


  onClickHandler=()=>{
    const supplierDetails={
      name:this.state.name,
      email:this.state.email,
     product_item:this.state.product_item,
      address:this.state.address,
      telephone:this.state.telephone,
    brand:this.state.brand
    }
    axios.post("http://localhost:4000/createsupplier",supplierDetails)
    this.setState({
      name:'',
      email:'',
     product_item:'',
      address:'',
      telephone:'',
    brand:''
    })
  }


  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Supplier</h1>
          <div className="row mt-5 mb-3">
            <h3>Supplier Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text" onChange={this.onChangeName}/>
            </div>
            <div className="col-6">
            <label>Email</label>
            <input className="form-control" type="text" onChange={this.onChangeEmail}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Telephone</label>
            <input className="form-control" type="text" onChange={this.onChangeTelephone}/>
            </div>
            <div className="col-6">
            <label>Address</label>
            <input className="form-control" type="text" onChange={this.onChangeAddress}/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Product Item</label>
            <input className="form-control" type="text" onChange={this.onChangePname}/>
            </div>
            <div className="col-6">
            <label>Brand</label>
            <input className="form-control" type="text" onChange={this.onChangeBrand}/>
            </div>
          </div>
          <button className="btn btn-success mt-5" onClick={this.onClickHandler}>Create</button>
          <a href="./supplier"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addsupplier;
