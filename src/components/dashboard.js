import React, { Component } from "react";
import "./dashboard.css";
import axios from "axios";
import Navbar from "./navbar";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      admins:[],
      admincount:'',
      employees:[],
      products:[],
      suppliers:[],
      services:[],
      warranty:[],
      employeecount:'',
      servicecount:'',
      suppliercount:'',
      warrantycount:'',
      productcount:'',
      allusers:''
    }
  }

componentDidMount(){
this.getAdmin();
this.getEmployee();
this.getProduct();
this.getSupplier();
this.getServices();
this.getWarranty();
this.getalluser();
}

getAdmin=()=>{
  axios.get("http://localhost:4000/admin")
  .then((res)=>this.setState({admins:res.data}))
  .then(()=>this.setState({
    admincount:this.state.admins.length
  }))
  console.log(this.state.admincount);
}
getEmployee=()=>{
  axios.get("http://localhost:4000/employees")
  .then((res)=>this.setState({employees:res.data}))
  .then(()=>this.setState({
    employeecount:this.state.employees.length
  }))
}
getProduct=()=>{
  axios.get("http://localhost:4000/products")
  .then((res)=>this.setState({products:res.data}))
  .then(()=>this.setState({
    productcount:this.state.products.length
  }))
}
getServices=()=>{
  axios.get("http://localhost:4000/services")
  .then((res)=>this.setState({services:res.data}))
  .then(()=>this.setState({
    servicecount:this.state.services.length
  }))
}
getSupplier=()=>{
  axios.get("http://localhost:4000/suppliers")
  .then((res)=>this.setState({suppliers:res.data}))
  .then(()=>this.setState({
    suppliercount:this.state.suppliers.length
  }))
}
getWarranty=()=>{
  axios.get("http://localhost:4000/warranty")
  .then((res)=>this.setState({warranty:res.data}))
  .then(()=>this.setState({
    warrantycount:this.state.warranty.length
  }))
}

getalluser=()=>{
  this.state.allusers=this.state.admincount+this.state.employeecount;

}


  render() {
    return (
      <div>
       <Navbar/>
        <h1 className="offset-3 mt-5">Admin Dahsboard</h1>
        <div className="container-fluid">
          <div className="row mt-5 mb-5">
            <div className="col-4 offset-3">
              <h1>Products</h1>
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Product Items</h5>
    <h5 className="text-center count">{this.state.productcount}</h5>
    <i class='bx bxs-shopping-bag-alt bx-lg  bx-tada-hover' style={{'color':'#CC0707'}}></i>

    
    
 
    
  </div>
</div>
            </div>
            <div className="col-4">
              <h1>Warranty</h1>
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Warranty items</h5>
    <h5 className="text-center count">{this.state.warrantycount}</h5>
    <i class='bx bxs-id-card bx-lg  bx-tada-hover' style={{'color':'#0783CC'}}></i>
  </div>
</div>
            </div>
          </div>
           <div className="row">
              <h1 className="offset-3">Services</h1>
              <div className="col-6 offset-3">
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Service items</h5>
    <h5 className="text-center count">{this.state.servicecount}</h5>
    <i class='bx bx-wrench  bx-lg  bx-tada-hover' style={{'color':'#758088'}}></i>
  </div>
</div>
              </div>
          </div>

          <div className="row">
              <h1 className="offset-3  mt-5">Users</h1>
          </div>
          <div className="row mb-5">
              <div className="col-2 offset-3">
               
                <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Users</h5>
    <h5 className="text-center count">{this.state.employeecount+this.state.admincount+this.state.suppliercount}</h5>
    <i class='bx bxs-group bx-lg  bx-tada-hover' style={{'color':'#000910'}}></i>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Admins</h5>
    <h5 className="text-center count">{this.state.admincount}</h5>
    <i class='bx bxs-user bx-lg  bx-tada-hover' style={{'color':'#0DAA41'}}></i>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Empolyess</h5>
    <h5 className="text-center count">{this.state.employeecount}</h5>
    <i class='bx bxs-user bx-lg  bx-tada-hover' style={{'color':'#7B0A93'}}></i>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card shadow">
  <div class="card-body">
    <h5 class="card-title sub-title">Number of Suppliers</h5>
    <h5 className="text-center count">{this.state.suppliercount}</h5>
    <i class='bx bxs-user bx-lg  bx-tada-hover' style={{'color':'#F20E69'}}></i>
  </div>
</div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
