import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import dulieujson from '../../../dulieu/dulieu.json';
import CardItem from '../../cpn/CardItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Shopify2(props) {
  const [ImgId, setImgId] = useState(1);
  function handleClick(id) {
    console.log(id);
    setImgId(id);
  }
  // list items
  let listItems = () => {
    // Ktra Ton tai Data
    if (dulieujson) {
      //  duyet mang lay id
      return dulieujson.map((value) => {
        //so sanh id trong Data voi id cua State imgID
        if (value.id === ImgId) {
          return (
            <div className="row justify-content-center mt-5">
              <div className="container">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  deviceType={props.deviceType}
                  itemClass="carousel-item-padding-40-px"
                >
                  {value.url.map((item) => (
                    <CardItem
                      src={item}
                      onClick={(imgId) => handleClick(value.id)}
                    ></CardItem>
                  ))}
                </Carousel>
              </div>
            </div>
          );
        }
      });
    }
  };
  //carousel
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
  //end carousel
  return (
    <Router>
      <section className="shopify shopify2">
        <div className="container">
          <div className="shopify__nav">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink
                  onClick={(id) => handleClick(1)}
                  exact
                  to="#"
                  className="nav-link "
                >
                  Sale
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={(id) => handleClick(2)}
                  exact
                  to="#"
                  className="nav-link"
                >
                  ACCESSORIES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={(id) => handleClick(3)}
                  exact
                  to="#"
                  className="nav-link"
                >
                  WOMEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={(id) => handleClick(4)}
                  exact
                  to="#"
                  className="nav-link"
                >
                  Mens
                </NavLink>
              </li>
            </ul>
          </div>
          {listItems()}
        </div>
      </section>
    </Router>
  )
}

export default Shopify2;
