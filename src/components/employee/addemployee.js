import React, { Component } from "react";
import axios from "axios";

class Addemployee extends Component {
  constructor(props){
    super(props)
    this.state={
      nic:'',
      name:'',
      email:'',
      telephone:'',
      address:''
    }
  }

  onChangeNIC=(e)=>{
    this.setState({
      nic:e.target.value
    })
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

  onClickHandler=()=>{
    const employeeDetails={
      nic:this.state.nic,
      email:this.state.email,
      name:this.state.name,
      telephone:this.state.telephone,
      address:this.state.address
    }
    axios.post("http://localhost:4000/addemployee",employeeDetails)
    this.setState({
      nic:'',
      email:'',
      name:'',
      telephone:'',
      address:''
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Employee</h1>
          <div className="row mt-5 mb-3">
            <h3>Employee Details</h3>
            <div className="col-6">
                <label>NIC</label>
            <input className="form-control" type="text" onChange={this.onChangeNIC}/>
            </div>
            <div className="col-6">
            <label>Name</label>
            <input className="form-control" type="text" onChange={this.onChangeName}/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Email</label>
            <input className="form-control" type="text" onChange={this.onChangeEmail}/>
            </div>
            <div className="col-6">
            <label>Telephone</label>
            <input className="form-control" type="text" onChange={this.onChangeTelephone}/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-6">
                <label>Address</label>
            <input className="form-control" type="text" onChange={this.onChangeAddress}/>
            </div>
          
          </div>
          <button className="btn btn-success mt-5" onClick={this.onClickHandler}>Create</button>
          <a href="./employee"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addemployee;
