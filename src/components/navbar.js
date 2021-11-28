import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <div>
       
       <nav class="nav nav-pills flex-column position-fixed mt-5 mx-2 dash-nav text-center">
  <a class="nav-link" href="./dashboard">Dashboard</a>
  <a class="nav-item nav-link" href="./product">Product</a>
  <a class="nav-link" href="./admin">Admin</a>
  <a class="nav-link" href="./employee">Employee</a>
  <a class="nav-link" href="./supplier">Supplier</a>
  <a class="nav-link" href="./service">Service</a>
  <a class="nav-link" href="./warranty">Warranty</a>
  <a class="nav-link" href="./">Login Page</a>
</nav>
      </div>
    );
  }
}
export default Navbar;