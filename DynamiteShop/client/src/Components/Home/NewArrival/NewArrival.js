// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import NewArrival from '../../cpn/NewArrival';
// function NewArrival1(props) {
//   return (
//     <section className="new-arrival">
//       <div className="container">
//         <div className="heading-secondary">
//           <h2 className="heading-secondary__title">NEW ARRIVAL</h2>
//           <div className="heading-secondary__icon">
//             <FontAwesomeIcon icon={faStar} />
//           </div>
//         </div>
//       </div>
//       <NewArrival></NewArrival>
//     </section>
//   );
// }

// export default NewArrival1;
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import dulieujson from '../../../dulieu/dulieu.json';
import ProductItem from '../../cpn/ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function NewArrival(props) {
  const [ImgId, setImgId] = useState('shirt');

  function handleClick(id) {
    console.log(id);
    setImgId(id);
  }
  // list items
  let listItems = () => {
    // Ktra Ton tai Data
    if (dulieujson) {
      //  duyet mang lay id
      return dulieujson.data.map((value) => {
        //so sanh id trong Data voi id cua State imgID
        if (value.id === ImgId) {
          return (
            <Carousel
              arrows={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== 'mobile' ? true : false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              // customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={props.deviceType}
              itemClass="carousel-item-padding-40-px"
            >
              {value.url.map((item) => (
                <ProductItem
                  src={item}
                  onClick={(findId) => handleClick(value.id)}
                ></ProductItem>
              ))}
            </Carousel>
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
      items: 3,
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
      <section className="new-arrival">
        <div className="container">
          <div className="heading-secondary">
            <h2 className="heading-secondary__title">NEW ARRIVAL</h2>
            <div className="heading-secondary__icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="new-arrival__nav">
            <ul className="nav justify-content-center">
              <li onClick={(id) => handleClick('shirt')} className="nav-item">
                <NavLink exact to="#" className="nav-link ">
                  T-shirts
                </NavLink>
              </li>
              <li onClick={(id) => handleClick('hoddie')} className="nav-item">
                <NavLink exact to="#" className="nav-link">
                  Hoodies
                </NavLink>
              </li>
              <li
                onClick={(id) => handleClick('footwear')}
                className="nav-item"
              >
                <NavLink exact to="#" className="nav-link">
                  Footwear
                </NavLink>
              </li>
              <li onClick={(id) => handleClick('digital')} className="nav-item">
                <NavLink exact to="#" className="nav-link">
                  Digital goods
                </NavLink>
              </li>
            </ul>
          </div>
        </div>{' '}
        {/* list data  */}
        <div className="list-products">
          <div className="container">{listItems()}</div>
        </div>{' '}
        {/* end list data  */}
      </section>
    </Router>
  );
}

export default NewArrival;
