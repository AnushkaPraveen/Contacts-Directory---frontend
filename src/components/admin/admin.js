import React, { Component } from "react";
import axios from 'axios';

class Admin extends Component {
  constructor(props){
    super(props)
    this.state={
      admins:[],
      name:"testname"
    }
  }

componentDidMount(){
this.getAdmin();
}

getAdmin=()=>{
  axios.get("http://localhost:4000/admin")
  .then((res)=>this.setState({admins:res.data}))
}

  render() {
    return (
      <div>
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
                <i className='bx bxs-trash bx-lg' style={{"color":"#f50808"}}></i>
                <i className='bx bxs-edit  bx-lg' style={{'color':'#02b502'}}></i>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Admin;
