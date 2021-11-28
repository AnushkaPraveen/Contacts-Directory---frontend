import React, { Component } from "react";
import axios from "axios";
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";

class Employee extends Component{
  constructor(props){
      super(props)
      this.state={
        employees:[],
        modelshow:false,
        employeeId:'',
        nic:'',
        name:'',
        email:'',
        telephone:'',
        address:''
      }
  }
  componentDidMount(){
     this.getEmployee();
  }

  getEmployee=()=>{
    axios.get("http://localhost:4000/employees")
    .then((res)=>this.setState({employees:res.data}))
  }

  onDelete=(id)=>{
    axios.delete("http://localhost:4000/deleteemployee/"+id)
    .then((res)=>{
      this.getEmployee();
    }) }

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
    modelHanle=(id,name,email,nic,address,telephone)=>{
      this.setState({
        modelshow:true,
        employeeId:id,
        name:name,
        email:email,
        nic:nic,
        address:address,
        telephone:telephone
      })
    }

    onUpdate=()=>{
      const updatedetails={
        name:this.state.name,
        email:this.state.email,
        nic:this.state.nic,
        telephone:this.state.telephone,
        address:this.state.address

      }
      axios.patch("http://localhost:4000/updateemployee/"+this.state.employeeId,updatedetails)
      .then((res)=>{
        this.getEmployee();
        this.setState({
          modelshow:false
        })
      })
    }


    render(){
        return(
            <div>
              <Navbar/>
               <h1 className="offset-2 mt-5">Employees</h1>
               
               
               <div className="container">
               <div className="d-flex justify-content-end">
                      <a href="./addemployee"><button className="btn btn-primary">Add Employee</button></a>
                      </div>
                 <table className="table offset-1">
                   <thead className="thead-dark">
                     <tr>
                       <th scope="col">EID</th>
                       <th scope="col">NIC</th>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">Telephone</th>
                       <th scope="col">Address</th>
                     </tr>
                   </thead>
                   <tbody>
                   {this.state.employees.map((employee,index)=>(
                     <tr key={index}>
                       <td>{employee._id}</td>
                       <td>{employee.nic}</td>
                       <td>{employee.name}</td>
                       <td>{employee.email}</td>
                       <td>{employee.telephone}</td>
                       <td>{employee.address}</td>
                       
                       <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(employee._id)}></i>
                       <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(employee._id,employee.nic,employee.name,employee.email,employee.telephone,employee.address)}></i>
                       
                     </tr>))}
                     
                   </tbody>
                 </table>
               </div>
            
               <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Employee Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
             <label>Name</label>
            <input className="form-control" type="text" value={this.state.name}  onChange={this.onChangeName}/>
            <label>Email</label>
            <input className="form-control" type="text" value={this.state.email}  onChange={this.onChangeEmail}/>
            <label>Telephone</label>
            <input className="form-control" type="text" value={this.state.telephone}  onChange={this.onChangeTelephone}/>
            <label>Address</label>
            <input className="form-control" type="text" value={this.state.address}  onChange={this.onChangeAddress}/>
            <label>NIC</label>
            <input className="form-control" type="text" value={this.state.nic}  onChange={this.onChangeNIC}/>
   
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>this.setState({modelshow:false})}>Close</Button>
    <Button variant="danger" onClick={this.onUpdate}>Save</Button>
  </Modal.Footer>
</Modal>
            </div>
        )
    }

}
export default Employee;