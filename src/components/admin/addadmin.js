import React, { Component } from "react";
import axios from "axios";

class Addadmin extends Component {
  constructor(props){
    super(props)
    this.state={
name:"",
email:""
    }
  }


onChangeName=(e)=>{
  this.setState({
    name:e.target.value   
  })
  console.log(this.state.name);
}
onChangeEmail=(e)=>{
  this.setState({
    email:e.target.value
  })
}

  onclickHandler=()=>{
    const adminDetails={
      name:this.state.name,
      email:this.state.email
    }
    axios.post("http://localhost:4000/addadmin",adminDetails)
    this.setState({
      name:'',
      email:''
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Admin</h1>
          <div className="row mt-5 mb-5">
            <h3>Admin Details</h3>
            <div className="col-6">
                <label>Name</label>
            <input className="form-control" type="text"  onChange={this.onChangeName}/>
            </div>
            <div className="col-6">
            <label>Email</label>
            <input className="form-control" type="text"  onChange={this.onChangeEmail}/>
            </div>
          </div>
         
          <button className="btn btn-success mt-5" onClick={this.onclickHandler}>Add</button>
          <a href="./admin"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addadmin;
