import React, { Component } from "react";
const axios = require("axios");
const addProductData = (product_name, product_price, image) => {
  return axios
    .post("/add", { product_name, product_price, image })
    .then((resp) => resp.data);
};
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_price: "",
      image: "",
    };
  }
  isChange = (event) => {
    const target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    var item = {};
    item.product_name = this.state.product_name;
    item.product_price = this.state.product_price;
    item.image = this.state.image;
    this.props.getItem(item);
    //addProductData
    addProductData(
      this.state.product_name,
      this.state.product_price,
      this.state.image
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
          <div className="col-8 mx-auto">
            {/* <form action="/add" method="post"> */}
            <form>
              <div className="form-group">
                <label htmlFor="product_name">Ten San Pham</label>
                <input
                  onChange={(event) => this.isChange(event)}
                  type="text"
                  className="form-control"
                  name="product_name"
                  id="product_name"
                  aria-describedby="name_text"
                  placeholder="Nhap Ten San Pham"
                />
                <small id="name_text" className="form-text text-muted">
                  Nhap Text nhap text
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="product_price">Gia San Pham</label>
                <input
                  onChange={(event) => this.isChange(event)}
                  type="text"
                  className="form-control"
                  name="product_price"
                  id="product_price"
                  aria-describedby="name_text"
                  placeholder="Nhap Gia San Pham"
                />
                <small id="name_text" className="form-text text-muted">
                  Nhap Text nhap text
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="image">Nhap Link anh san pham</label>
                <input
                  onChange={(event) => this.isChange(event)}
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                  aria-describedby="name_text"
                  placeholder="Nhap Anh San Pham"
                />
                <small id="name_text" className="form-text text-muted">
                  Nhap Link anh zo
                </small>
              </div>
              <button
                onClick={() => this.handleClick()}
                type="reset"
                className="btn btn-warning btn-block"
              >
                Them moi
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
