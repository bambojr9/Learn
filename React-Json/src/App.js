import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import DieuHuongUrl from "./router/DieuHuongUrl";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <DieuHuongUrl></DieuHuongUrl>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}
