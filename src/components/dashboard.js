import React, { Component } from "react";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="offset-3 mt-5">Admin Dahsboard</h1>
        <div className="container-fluid">
          <div className="row mt-5 mb-5">
            <div className="col-4 offset-3">
              <h1>Products</h1>
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Product Items</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
            <div className="col-4">
              <h1>Warranty</h1>
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Warranty items</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
          </div>
           <div className="row">
              <h1 className="offset-3">Services</h1>
              <div className="col-6 offset-3">
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Service items</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
              </div>
          </div>

          <div className="row">
              <h1 className="offset-3  mt-5">Users</h1>
          </div>
          <div className="row mb-5">
              <div className="col-2 offset-3">
               
                <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Users</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Admins</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Empolyess</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
              </div>
              <div className="col-2">
              <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number of Suppliers</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
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
