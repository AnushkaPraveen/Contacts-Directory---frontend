import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <body className="body-back">
          <h1 className="topic">Enterprise Asset Management<br/> System</h1>
          <a href="./dashboard"><button className="btn btn-light btn-lg login">Login</button></a>
        </body>
      </div>
    );
  }
}
export default Home;
