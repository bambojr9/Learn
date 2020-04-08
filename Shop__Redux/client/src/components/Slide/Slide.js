import React, { Component } from "react";
import Slider from "react-slick";
// import slideshow1 from "../../assets/images/home/slideshow1.jpg";
// import category1 from "../../assets/images/home/category1.jpg";
export default class Slide extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Slider
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <div className="slider-item-1">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/home21_01_x1024.jpg?v=1577629328"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="slider-item-1">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/home21_01_x1024.jpg?v=1577629328"
                className="img-fluid"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
