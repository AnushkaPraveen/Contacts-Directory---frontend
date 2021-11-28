import React, { Component } from "react";
import axios from 'axios';
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";

class Admin extends Component {
  constructor(props){
    super(props)
    this.state={
      admins:[],
      adminId:'',
      modelshow:false,
      name:'',
      email:''
   
    }
  }

componentDidMount(){
this.getAdmin();
}

getAdmin=()=>{
  axios.get("http://localhost:4000/admin")
  .then((res)=>this.setState({admins:res.data}))
}

modelHanle=(id,name,email)=>{
  this.setState({
    modelshow:true,
    adminId:id,
    name:name,
    email:email
  })
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



onUpdate=()=>{
  const updatedetails={
    name:this.state.name,
    email:this.state.email
  }
  axios.patch("http://localhost:4000/updateadmin/"+this.state.adminId,updatedetails)
  .then((res)=>{
    this.getAdmin();
    this.setState({
      modelshow:false
    })
  })
}

onDelete=(id)=>{
axios.delete("http://localhost:4000/deleteadmin/"+id)
.then((res)=>{
  this.getAdmin();
})  

}

  render() {
    return (
      <div>
        <Navbar/>
        <h1 className="offset-2 mt-5">Admins</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addadmin"><button className="btn btn-primary">Add Admin</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.admins.map((admin,index)=>(
              <tr key={index}>
                <td>{admin._id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(admin._id)}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(admin._id,admin.name,admin.email)}></i>
              </tr>))}
            </tbody>
          </table>
        </div>


        <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Admin Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
             <label>Name</label>
            <input className="form-control" type="text" value={this.state.name} placeholder="Default input" onChange={this.onChangeName}/>
            <label>Email</label>
            <input className="form-control" type="text" value={this.state.email} placeholder="Default input" onChange={this.onChangeEmail}/>
   
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>this.setState({modelshow:false})}>Close</Button>
    <Button variant="danger" onClick={this.onUpdate}>Save</Button>
  </Modal.Footer>
</Modal>
      </div>



    );
  }
}
export default Admin;
