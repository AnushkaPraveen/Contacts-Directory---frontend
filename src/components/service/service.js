import React, { Component } from "react";
import axios from "axios";
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";
class Service extends Component{
  constructor(props){
    super(props)
    this.state={
       services:[],
       modelshow:false,
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

componentDidMount(){
  this.getServices();
}

getServices=()=>{
  axios.get("http://localhost:4000/services")
  .then((res)=>this.setState({services:res.data}))
}

onDelete=(id)=>{
  axios.delete("http://localhost:4000/deleteservice/"+id)
  .then((res)=>{
    this.getServices();
  }) }

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

modelHanle=(id,item,employee,brand,category,name,address,telephone,fee,note)=>{
  this.setState({
    modelshow:true,
    serviceId:id,
    customer_name:name,
   category:category,
   brand:brand,
   service_item:item,
   assigned_employee:employee,
   customer_address:address,
   customer_telephone:telephone,
   fee:fee,
   special_note:note
   
  })
}

onUpdate=()=>{
  const updatedetails={
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
  axios.patch("http://localhost:4000/updateservice/"+this.state.serviceId,updatedetails)
  .then((res)=>{
    this.getServices();
    this.setState({
      modelshow:false
    })
  })
}



    render(){
        return(
            <div>
              <Navbar/>
              <h1 className="offset-2 mt-5">Services</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addservice"><button className="btn btn-primary">Add Service</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Service Item</th>
                <th scope="col">Assigned Employee</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Telephone</th>
                <th scope="col">Customer Address</th>
                <th scope="col">Fee</th>
                <th scope="col">Special Note</th>

              </tr>
            </thead>
            <tbody>
            {this.state.services.map((service,index)=>(
              <tr key={index}>
                <td>{service._id}</td>
                <td>{service.service_item}</td>
                <td>{service.assigned_employee}</td>
                <td>{service.brand}</td>
                <td>{service.category}</td>
                <td>{service.customer_name}</td>
                <td>{service.customer_address}</td>
                <td>{service.customer_telephone}</td>
                <td>{service.fee}</td>
                <td>{service.special_note}</td>
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(service._id)}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(service._id,service.service_item,service.assigned_employee,service.brand,service.category,service.customer_name,service.customer_address,service.customer_telephone,service.fee,service.special_note)}></i>
                
              </tr>))}              
            </tbody>
          </table>
        </div>
        <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Service Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
            <label>Service Item</label>
            <input className="form-control" type="text" value={this.state.service_item}  onChange={this.onChangeItem}/>
            <label>Assigned Employee</label>
            <input className="form-control" type="text" value={this.state.assigned_employee}  onChange={this.onChangeEmployee}/>
            <label>Brand</label>
            <input className="form-control" type="text" value={this.state.brand}  onChange={this.onChangeBrand}/>
            <label>Category</label>
            <input className="form-control" type="text" value={this.state.category}  onChange={this.onChangeCategory}/>
            <label>Customer Name</label>
            <input className="form-control" type="text" value={this.state.customer_name} onChange={this.onChangeName}/>
            <label>Customer Telephone</label>
            <input className="form-control" type="text" value={this.state.customer_address} onChange={this.onChangeAddress}/>
            <label>Customer Address</label>
            <input className="form-control" type="text" value={this.state.customer_telephone} onChange={this.onChangeTelephone}/>
            <label>Fee</label>
            <input className="form-control" type="text" value={this.state.fee} onChange={this.onChangeFee}/>
            <label>Special Note</label>
            <input className="form-control" type="text" value={this.state.special_note} onChange={this.onChangeSpecialNote}/>
           
   
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
export default Service;