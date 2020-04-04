import React, { Component } from "react";
import HeadTitle from "./components/HeadTitle";
import Product from "./components/Product";
import Add from "./components/Add";

const axios = require("axios");
const getProductData = () => {
  return axios.get("/getdata01").then((response) => response.data);
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res,
        });
      });
    }
  }
  getItemApp = (item) => {
    var dataTemp = [];
    dataTemp = this.state.data;
    dataTemp.push(item);
    this.setState({
      data: dataTemp,
    });
  };

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <Product
            key={key}
            product_name={value.product_name}
            product_price={value.product_price}
            image={value.image}
          ></Product>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <HeadTitle> </HeadTitle>
        <Add getItem={(item) => this.getItemApp(item)}></Add>
        <div className="container mt-3">
          <div className="row">{this.printData()}</div>
        </div>
      </div>
    );
  }
}
