import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./components/dashboard";
import Home from './components/home';
import Admin from './components/admin/admin';
import Employee from './components/employee/employee';
import Product from './components/product/product';
import Supplier from './components/supplier/supplier';
import Warranty from './components/warranty/warranty';
import Service from './components/service/service';
import Addproduct from './components/product/addproduct';
import Addadmin from './components/admin/addadmin';
import Addservice from './components/service/addservice';
import Addsupplier from './components/supplier/addsupplier';
import Addwarranty from './components/warranty/addwarranty';



function App() {
  return (
    <div>
  <nav class="nav nav-pills flex-column position-fixed mt-5 mx-2">
  <a class="nav-link" href="./dashboard">Dashboard</a>
  <a class="nav-item nav-link" href="./product">Product</a>
  <a class="nav-link" href="./admin">Admin</a>
  <a class="nav-link" href="./employee">Employee</a>
  <a class="nav-link" href="./supplier">Supplier</a>
  <a class="nav-link" href="./service">Service</a>
  <a class="nav-link" href="./warranty">Warranty</a>
</nav>
       <Router>
         <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/employee" element={<Employee/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/supplier" element={<Supplier/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/warranty" element={<Warranty/>}/>
       <Route path="/addproduct" element={<Addproduct/>}/>
       <Route path="/addadmin" element={<Addadmin/>}/>
       <Route path="/addservice" element={<Addservice/>}/>
       <Route path="/addsupplier" element={<Addsupplier/>}/>
       <Route path="/addwarranty" element={<Addwarranty/>}/>
       </Routes>
       </Router>
 
    </div>
  );
}

export default App;
