import React, { Component } from "react";
import axios from "axios";
import {Modal,Button} from 'react-bootstrap';
import Navbar from "../navbar";

class Product extends Component{
  constructor(props){
    super(props)
    this.state={
      products:[],
      modelshow:false,
      productId:'',
      name:'',
      category:'',
      brand:'',
      price:''

    }
  }

  componentDidMount(){
    this.getProduct();
  }

getProduct=()=>{
  axios.get("http://localhost:4000/products")
  .then((res)=>this.setState({products:res.data}))
}

onDelete=(id)=>{
  axios.delete("http://localhost:4000/deleteproduct/"+id)
  .then((res)=>{
    this.getProduct();
  }) }


onChangeName=(e)=>{
  this.setState({
    name:e.target.value
  })
}
onChangeCategory=(e)=>{
  this.setState({
    category:e.target.value
  })
}
onChangeBrand=(e)=>{
  this.setState({
    brand:e.target.value
  })
}
onChangePrice=(e)=>{
  this.setState({
    price:e.target.value
  })
}

modelHanle=(id,name,category,brand,price)=>{
  this.setState({
    modelshow:true,
    productId:id,
    name:name,
   category:category,
   brand:brand,
   price:price
  })
}

onUpdate=()=>{
  const updatedetails={
    name:this.state.name,
   category:this.state.category,
   brand:this.state.brand,
   price:this.state.price

  }
  axios.patch("http://localhost:4000/updateproduct/"+this.state.productId,updatedetails)
  .then((res)=>{
    this.getProduct();
    this.setState({
      modelshow:false
    })
  })
}

    render(){
        return(
            <div>
              <Navbar/>
               <h1 className="offset-2 mt-5">Products</h1>
               
               
        <div className="container">
        <div className="d-flex justify-content-end">
               <a href="./addproduct"><button className="btn btn-primary">Create Product</button></a>
               </div>
          <table className="table offset-1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
              </tr>
            </thead>
            <tbody>
            {this.state.products.map((product,index)=>(
              <tr key={index}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}} onClick={()=>this.onDelete(product._id)}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}} onClick={()=>this.modelHanle(product._id,product.name,product.category,product.brand,product.price)}></i>
                
              </tr>))}
            </tbody>
          </table>
        </div>
        <Modal show={this.state.modelshow}>
  <Modal.Header>
    <Modal.Title>Edit Product Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
             <label>Name</label>
            <input className="form-control" type="text" value={this.state.name}  onChange={this.onChangeName}/>
            <label>Category</label>
            <input className="form-control" type="text" value={this.state.category}  onChange={this.onChangeCategory}/>
            <label>Brand</label>
            <input className="form-control" type="text" value={this.state.brand}  onChange={this.onChangeBrand}/>
            <label>Price</label>
            <input className="form-control" type="text" value={this.state.price}  onChange={this.onChangePrice}/>
           
   
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
export default Product;