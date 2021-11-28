import React, { Component } from "react";
import axios from "axios";
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";

class Supplier extends Component{
  constructor(props){
    super(props)
this.state={
  suppliers:[],
  modelshow:false,
  supplierId:'',
  name:'',
  email:'',
 product_item:'',
  address:'',
  telephone:'',
brand:''
}
  }


  componentDidMount(){
    this.getSupplier();
  }

  getSupplier=()=>{
    axios.get("http://localhost:4000/suppliers")
    .then((res)=>this.setState({suppliers:res.data}))
  }

  onDelete=(id)=>{
    axios.delete("http://localhost:4000/deletesupplier/"+id)
    .then((res)=>{
      this.getSupplier();
    }) }


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

  modelHanle=(id,name,email,telephone,address,pname,brand)=>{
    this.setState({
      modelshow:true,
      supplierId:id,
      name:name,
      email:email,
 
    address:address,
    telephone:telephone,
    product_item:pname,
    brand:brand
     
    })
  }
  onUpdate=()=>{
    const updatedetails={
      name:this.state.name,
      email:this.state.email,
     product_item:this.state.product_item,
      address:this.state.address,
      telephone:this.state.telephone,
    brand:this.state.brand
  
    }
    axios.patch("http://localhost:4000/updatesupplier/"+this.state.supplierId,updatedetails)
    .then((res)=>{
      this.getSupplier();
      this.setState({
        modelshow:false
      })
    })
  }


    render(){
        return(
            <div>
              <Navbar/>
               <h1 className="offset-2 mt-5">Suppliers</h1>
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addsupplier"><button className="btn btn-primary">Add Supplier</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
                <th scope="col">Address</th>
                <th scope="col">Product item</th>
                <th scope="col">Brand</th>
              </tr>
            </thead>
            <tbody>
            {this.state.suppliers.map((supplier,index)=>(
              <tr key={index}>
                <td>{supplier._id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.telephone}</td>
                <td>{supplier.address}</td>
                <td>{supplier.product_item}</td>
                <td>{supplier.brand}</td>
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(supplier._id)}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(supplier._id,supplier.name,supplier.email,supplier.telephone,supplier.address,supplier.product_item,supplier.brand)}></i>
                
              </tr>))}
             
              
            </tbody>
          </table>
        </div>

        <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Service Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
            <label>Name</label>
            <input className="form-control" type="text" value={this.state.name}  onChange={this.onChangeName}/>
           
            <label>Email</label>
            <input className="form-control" type="text" value={this.state.email}  onChange={this.onChangeEmail}/>
            <label>Phone</label>
            <input className="form-control" type="text" value={this.state.telephone}  onChange={this.onChangeTelephone}/>
            <label>Address</label>
            <input className="form-control" type="text" value={this.state.address} onChange={this.onChangeAddress}/>
            <label>Product Item</label>
            <input className="form-control" type="text" value={this.state.product_item} onChange={this.onChangePname}/>
            <label>Brand</label>
            <input className="form-control" type="text" value={this.state.brand} onChange={this.onChangeBrand}/>
   
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
export default Supplier;