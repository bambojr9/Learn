import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '../../cpn/ProductItem';
//
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//
function FeaturedProducts(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
     landscape: {
      breakpoint: { max: 767.98, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="featured-products">
      <div className="container">
        <div className="heading-secondary">
          <h2 className="heading-secondary__title">FEATURED PRODUCTS</h2>
          <div className="heading-secondary__icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <Carousel
         arrows={true}
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedProducts;
