import React, { Component } from "react";
import axios from "axios";
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";

class Warranty extends Component{
  constructor(props){
    super(props)
    this.state={
      warranty:[],
      warrantyId:'',
      modelshow:false,
      product_name:'',
      email:'',
      customer_name:'',
      address:'',
      phone:'',
      warranty_time:'',
      purchase:''
    }
  }

  componentDidMount(){
    this.getWarranty();
  }

  getWarranty=()=>{
    axios.get("http://localhost:4000/warranty")
    .then((res)=>this.setState({warranty:res.data}))
  }

  onDelete=(id)=>{
    axios.delete("http://localhost:4000/deletewarranty/"+id)
    .then((res)=>{
      this.getWarranty();
    }) }

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

    modelHanle=(id,pname,cname,email,phone,address,time,purchase)=>{
      this.setState({
        modelshow:true,
        warrantyId:id,
        product_name:pname,
      email:email,
      customer_name:cname,
      address:address,
      phone:phone,
      warranty_time:time,
      purchase:purchase
       
      })
    }


    onUpdate=()=>{
      const updatedetails={
        product_name:this.state.product_name,
        email:this.state.email,
        customer_name:this.state.customer_name,
        address:this.state.address,
        phone:this.state.phone,
        warranty_time:this.state.warranty_time,
        purchase:this.state.purchase
    
      }
      axios.patch("http://localhost:4000/updatewarranty/"+this.state.warrantyId,updatedetails)
      .then((res)=>{
        this.getWarranty();
        this.setState({
          modelshow:false
        })
      })
    }



    render(){
        return(
            <div>
              <Navbar/>
               <h1 className="offset-2 mt-5">Warranty</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addwarranty"><button className="btn btn-primary">Add Warranty</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Warraty Time Period</th>
                <th scope="col">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
            {this.state.warranty.map((warranty,index)=>(
              <tr key={index}>
                <td>{warranty._id}</td>
                <td>{warranty.product_name}</td>
                <td>{warranty.customer_name}</td>
                <td>{warranty.email}</td>
                <td>{warranty.phone}</td>
                <td>{warranty.address}</td>
                <td>{warranty.warranty_time}</td>
                <td>{warranty.purchase}</td>
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(warranty._id)}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(warranty._id,warranty.product_name,warranty.customer_name,warranty.email,warranty.phone,warranty.address,warranty.warranty_time,warranty.purchase)}></i>
                
              </tr>))}
              
              
            </tbody>
          </table>
        </div>
        <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Service Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
            <label>Product Name</label>
            <input className="form-control" type="text" value={this.state.product_name}  onChange={this.onChangePname}/>
            <label>Customer Name</label>
            <input className="form-control" type="text" value={this.state.customer_name}  onChange={this.onChangeCname}/>
            <label>Email</label>
            <input className="form-control" type="text" value={this.state.email}  onChange={this.onChangeEmail}/>
            <label>Phone</label>
            <input className="form-control" type="text" value={this.state.phone}  onChange={this.onChangePhone}/>
            <label>Address</label>
            <input className="form-control" type="text" value={this.state.address} onChange={this.onChangeAddress}/>
            <label>Warranty Time Period</label>
            <input className="form-control" type="text" value={this.state.warranty_time} onChange={this.onChangeTime}/>
            <label>Purchurse Date</label>
            <input className="form-control" type="text" value={this.state.purchase} onChange={this.onChangePurchase}/>
   
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
export default Warranty;