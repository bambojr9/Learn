import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
export default class Slide extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className="container">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="shopify__product">
            <Link to="125125" className="shopify__product--img">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/products/Custom_Fit_Soft-Touch_Polo_3_600x.jpg?v=1542305601 "
                alt=""
                className="img-fluid"
              />
            </Link>
            <div className="shopify__product--description ">
              <div className="info d-flex justify-content-lg-between">
                <div className="info__name">
                  <Link to="#">ZARA </Link>
                </div>
                <div className="rating">
                  <span>
                    <Link to="#">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="title">
                <Link to="#">Standard Fit Sport Shirt</Link>
              </div>
              <div className="price  d-flex">
                <Link to="#">$888</Link>
                <Link to="#" className="price-sale">
                  $888
                </Link>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>

          <div className="shopify__product">
            <Link to="#" className="shopify__product--img">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/products/Vachetta_Sahara_Duffel_Bag_f192f146-f7a0-4d4e-a453-89fa116f9cd0_600x.jpg?v=1542378362 "
                alt=""
                className="img-fluid"
              />
            </Link>
            <div className="shopify__product--description ">
              <div className="info d-flex justify-content-lg-between">
                <div className="info__name">
                  <Link to="#">ZARA </Link>
                </div>
                <div className="rating">
                  <span>
                    <Link to="#">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="title">
                <Link to="#">Standard Fit Sport Shirt</Link>
              </div>
              <div className="price  d-flex">
                <Link to="#">$888</Link>
                <Link to="#" className="price-sale">
                  $888
                </Link>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
          <div className="shopify__product">
            <Link to="#" className="shopify__product--img">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/products/Custom_Fit_Soft-Touch_Polo_3_600x.jpg?v=1542305601 "
                alt=""
                className="img-fluid"
              />
            </Link>
            <div className="shopify__product--description ">
              <div className="info d-flex justify-content-lg-between">
                <div className="info__name">
                  <Link to="#">ZARA </Link>
                </div>
                <div className="rating">
                  <span>
                    <Link to="#">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="title">
                <Link to="#">Standard Fit Sport Shirt</Link>
              </div>
              <div className="price  d-flex">
                <Link to="#">$888</Link>
                <Link to="#" className="price-sale">
                  $888
                </Link>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
          <div className="shopify__product">
            <Link to="#" className="shopify__product--img">
              <img
                src="//cdn.shopify.com/s/files/1/0130/5041/3114/products/Vachetta_Sahara_Duffel_Bag_f192f146-f7a0-4d4e-a453-89fa116f9cd0_600x.jpg?v=1542378362"
                alt=""
                className="img-fluid"
              />
            </Link>
            <div className="shopify__product--description ">
              <div className="info d-flex justify-content-lg-between">
                <div className="info__name">
                  <Link to="#">ZARA </Link>
                </div>
                <div className="rating">
                  <span>
                    <Link to="#">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="title">
                <Link to="#">Standard Fit Sport Shirt</Link>
              </div>
              <div className="price  d-flex">
                <Link to="#">$888</Link>
                <Link to="#" className="price-sale">
                  $888
                </Link>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    );
  }
}
