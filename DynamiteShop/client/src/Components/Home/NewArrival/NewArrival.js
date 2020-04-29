// import React, { useState } from 'react';
// import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import dulieujson from '../../../dulieu/dulieu.json';
// import ProductItem from '../../cpn/ProductItem';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// function NewArrival(props) {
//   const [ImgId, setImgId] = useState('shirt');

//   function handleClick(id) {
//     console.log(id);
//     setImgId(id);
//   }
// //   // list items
//   let listItems = () => {
//     // Ktra Ton tai Data
//     if (dulieujson) {
//       //  duyet mang lay id
//       return dulieujson.data.map((value, key) => {
//         //so sanh id trong Data voi id cua State imgID
//         if (value.id === ImgId) {
//           return (
//             <Carousel
//               key={key}
//               arrows={true}
//               swipeable={true}
//               draggable={true}
//               showDots={false}
//               responsive={responsive}
//               ssr={true} // means to render carousel on server-side.
//               infinite={true}
//               autoPlay={props.deviceType !== 'mobile' ? true : false}
//               autoPlaySpeed={5000}
//               keyBoardControl={true}
//               // customTransition="all 1s"
//               transitionDuration={500}
//               containerClass="carousel-container"
//               // removeArrowOnDeviceType={['tablet', 'mobile']}
//               deviceType={props.deviceType}
//               itemClass="carousel-item-padding-40-px"
//             >
//               {value.url.map((item, key) => (
//                 <ProductItem
//                   key={key}
//                   src={item}
//                   onClick={(findId) => handleClick(value.id)}
//                 ></ProductItem>
//               ))}
//             </Carousel>
//           );
//         }
//       });
//     }
//   };
//   //carousel
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3,
//     },
//     landscape: {
//       breakpoint: { max: 767.98, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   //end carousel
//   return (
// <Router>
//   <section className="new-arrival">
//     <div className="container">
//       <div className="heading-secondary">
//         <h2 className="heading-secondary__title">NEW ARRIVAL</h2>
//         <div className="heading-secondary__icon">
//           <FontAwesomeIcon icon={faStar} />
//         </div>
//       </div>
//       <div className="new-arrival__nav">
//         <ul className="nav justify-content-center">
//           <li onClick={(id) => handleClick('shirt')} className="nav-item">
//             <NavLink exact to="#" className="nav-link ">
//               T-shirts
//             </NavLink>
//           </li>
//           <li onClick={(id) => handleClick('hoddie')} className="nav-item">
//             <NavLink exact to="#" className="nav-link">
//               Hoodies
//             </NavLink>
//           </li>
//           <li
//             onClick={(id) => handleClick('footwear')}
//             className="nav-item"
//           >
//             <NavLink exact to="#" className="nav-link">
//               Footwear
//             </NavLink>
//           </li>
//           <li onClick={(id) => handleClick('digital')} className="nav-item">
//             <NavLink exact to="#" className="nav-link">
//               Digital goods
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>{' '}
// {/* list data  */}
// <div className="list-products">
//   <div className="container">{listItems()}</div>
// </div>{' '}
// {/* end list data  */}
//   </section>
// </Router>
//   );
// }

// export default NewArrival;

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import dulieujson from '../../../dulieu/dulieu.json';
import ProductItem from '../../cpn/ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../../actions/actFetchData';
//carousel
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

//end carousel
class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeItem: 'footwear',
    };
  }

  componentDidMount() {
    this.props.fetchDatabaseAllProducts();
  }
  log = () => {
    console.log(
      ' \n DB API :  ' + JSON.stringify(this.props.DbAllProducts) + ' \n'
    );
  };
  handleClickaaaa = (productPortfolio) => {
    console.log('iid la ' + productPortfolio);
  };
  //   const [ImgId, setImgId] = useState('shirt');

  //   function handleClick(id) {
  //     console.log(id);
  //     setImgId(id);
  //   }
  //   // list items
  listItems = () => {
    // Ktra Ton tai Data
    if (this.props.DbAllProducts) {
      //  duyet mang lay id
      // return dulieujson.data.map((value, key) => {
      this.props.DbAllProducts.map((value, key) => {
        //so sanh id trong Data voi id cua State imgID
        if (value.productPortfolio === this.state.changeItem) {
          return (
            <Carousel
              key={key}
              arrows={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={this.props.deviceType !== 'mobile' ? true : false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              // customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={this.props.deviceType}
              itemClass="carousel-item-padding-40-px"
            >
              {value.url.map((item, key) => (
                <ProductItem
                  // onClick={(findId) => handleClick(value.id)}
                  key={key}
                  src={value.src}
                  name={value.name}
                  price={value.price}
                  oldPrice={value.oldPrice}
                ></ProductItem>
              ))}
            </Carousel>
          );
        }
      });
    }
  };
  render() {
    let data = this.props.DbAllProducts;
    const optionFilter = data
      .map((e) => e['productPortfolio'])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter((e) => data[e])
      .map((e) => data[e]);
    console.log(
      ' \n DB API :  ' + JSON.stringify(this.props.DbAllProducts) + ' \n'
    );
    console.log(
      data.map((e) => e['productPortfolio']) +
        '\n so 1 \n' +
        data
          .map((e) => e['productPortfolio'])
          .map((e, i, final) => final.indexOf(e) === i && i) +
        '\n so 2 \n' +
        data
          .map((e) => e['productPortfolio'])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter((e) => data[e]) +
        '\n so 3 \n' +
        JSON.stringify(
          data
            .map((e) => e['productPortfolio'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => data[e])
            .map((e) => data[e])
        )
    );

    return (
      <div>
        <p onClick={() => this.log()}> TEstttttttttttt</p>
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
                  {optionFilter.map((value, key) => {
                    return (
                      <li
                        onClick={(productPortfolio) =>
                          this.handleClickaaaa(value.productPortfolio)
                        }
                        className="nav-item"
                      >
                        <NavLink exact to="#" className="nav-link ">
                          {value.productPortfolio}
                        </NavLink>
                      </li>
                    );
                  })}
                  <li className="nav-item">
                    <NavLink exact to="#" className="nav-link ">
                      SALE
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink exact to="#" className="nav-link ">
                      T-shirts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="#" className="nav-link">
                      Hoodies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="#" className="nav-link">
                      Footwear
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="#" className="nav-link">
                      Digital goods
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>{' '}
            {/* list data  */}
            <div className="list-products">
              <div className="container">{this.listItems()}</div>
            </div>{' '}
            {/* end list data  */}
          </section>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DbAllProducts: state.DbAllProducts,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabaseAllProducts: () => {
      dispatch(actFetchDataAllProductsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);
