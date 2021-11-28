import React, { Component } from "react";
import axios from "axios";

class Addservice extends Component {
  constructor(props){
    super(props)
    this.state={
      serviceId:'',
      service_item:'',
      assigned_employee:'',
      brand:'',
      category: '',
      customer_name:'',
      customer_address:'',
      customer_telephone:'',
      fee:'',
      special_note:''


    }
  }

  onChangeItem=(e)=>{
    this.setState({
      service_item:e.target.value
    })
  }

  onChangeEmployee=(e)=>{
    this.setState({
      assigned_employee:e.target.value
    })
  }
  onChangeBrand=(e)=>{
    this.setState({
      brand:e.target.value
    })
  }
  onChangeCategory=(e)=>{
    this.setState({
      category:e.target.value
    })
  }
  onChangeName=(e)=>{
    this.setState({
      customer_name:e.target.value
    })
  }
  onChangeAddress=(e)=>{
    this.setState({
      customer_address:e.target.value
    })
  }
  onChangeTelephone=(e)=>{
    this.setState({
      customer_telephone:e.target.value
    })
  }
  onChangeFee=(e)=>{
    this.setState({
      fee:e.target.value
    })
  }
  onChangeSpecialNote=(e)=>{
    this.setState({
      special_note:e.target.value
    })
  }

  
  onClickHandler=()=>{
    const serviceDetails={
      service_item:this.state.service_item,
      assigned_employee:this.state.assigned_employee,
      brand:this.state.brand,
      category: this.state.category,
      customer_name:this.state.customer_name,
      customer_address:this.state.customer_address,
      customer_telephone:this.state.customer_telephone,
      fee:this.state.fee,
      special_note:this.state.special_note
    }
    axios.post("http://localhost:4000/createservice",serviceDetails)
    this.setState({
      service_item:'',
      assigned_employee:'',
      brand:'',
      category: '',
      customer_name:'',
      customer_address:'',
      customer_telephone:'',
      fee:'',
      special_note:''
    })
  }
 

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Service</h1>
          <div className="row mt-5 mb-3">
            <h3>Service Details</h3>
            <div className="col-6">
                <label>Service Item</label>
            <input className="form-control" type="text" onChange={this.onChangeItem}/>
            </div>
            <div className="col-6">
            <label>Assigned Employee</label>
            <input className="form-control" type="text" onChange={this.onChangeEmployee}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Brand</label>
            <input className="form-control" type="text" onChange={this.onChangeBrand}/>
            </div>
            <div className="col-6">
            <label>Category</label>
            <input className="form-control" type="text" onChange={this.onChangeCategory}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Customer Name</label>
            <input className="form-control" type="text" onChange={this.onChangeName}/>
            </div>
            <div className="col-6">
            <label>Customer Telephone</label>
            <input className="form-control" type="text" onChange={this.onChangeTelephone}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Customer Address</label>
            <input className="form-control" type="text" onChange={this.onChangeAddress}/>
            </div>
            <div className="col-6">
            <label>Fee</label>
            <input className="form-control" type="text" onChange={this.onChangeFee}/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-12">
                <label>Special Note</label>
            <input className="form-control" type="text" onChange={this.onChangeSpecialNote}/>
            </div>
           
          </div>
          <button className="btn btn-success mt-5" onClick={this.onClickHandler}>Create</button>
          <a href="./service"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addservice;
