import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import T_Shirt_0101 from '../../assets/img/product/t-shirts/0101.jpg';
import T_Shirt_0102 from '../../assets/img/product/t-shirts/0102.jpg';
function ProductItem(props) {
  return (
    <Router>
      {/* <div className="col-md-3 "> */}
        <div className="productItem">
          <Link to="#" className="productItem__img">
            <img src={props.src} alt="" className="img-fluid" />
            {/* <img
              src={T_Shirt_0101}
              alt="T_Shirt_0101"
              className="img-fluid productItem__img--01"
            />
            <img
              src={T_Shirt_0102}
              alt="T_Shirt_0102"
              className="img-fluid productItem__img--02"
            /> */}
          </Link>
          <div className="productItem__content">
            <h4 className="productItem__content--title">
              Hight Space Sneakers
            </h4>
            <div className="productItem__content--price">
              <Link to="#">$987</Link>
              <Link to="#" className="price-sale">
                $1234
              </Link>
            </div>
            <div className="productItem__content--rating">
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
            <button type="button" className="btn">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Select Options</span>
            </button>
          </div>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default ProductItem;
