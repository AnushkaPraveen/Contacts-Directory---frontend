import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./components/dashboard";
import Home from './components/home';
import Admin from './components/admin/admin';
import Employee from './components/employee/employee';
import Product from './components/product/product';
import Supplier from './components/supplier/supplier';
import Warranty from './components/warranty/warranty';
import Service from './components/service/service';



function App() {
  return (
    <div>
 
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
       </Routes>
       </Router>
 
    </div>
  );
}

export default App;
