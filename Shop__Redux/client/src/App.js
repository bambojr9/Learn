import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
// var $ = require('jquery');
import Slide from "./components/Slide/Slide";
import Shopify from "./components/Shopify/Shopify";
import Product from "./components/Product/Product";

function App() {
  return (
    <Router>
      <Header></Header>
      <Slide></Slide>
      <section className="shopify">
        <div className="container">
          <div className="row">
            <Shopify></Shopify>
            <Shopify></Shopify>
            <Shopify></Shopify>
            <Shopify></Shopify>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default App;
