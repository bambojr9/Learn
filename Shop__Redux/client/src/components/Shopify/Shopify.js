import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Shopify extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-6 mt-4">
        <div className="layout-promo-box">
          <Link to="/333">
            <img
              className="img-fluid layout-promo-box__img"
              src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/demo10_02_600x.jpg?v=1542301303"
              alt=""
            />
          </Link>
          <Link className="layout-promo-box__title-small" to="/3333">
            Mens
          </Link>
        </div>
      </div>
    );
  }
}
