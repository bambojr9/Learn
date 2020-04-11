import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckMoving,
  faHeadphones,
  faLocationArrow,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
function Service(props) {
  return (
    <section className="service">
      <div
        className="container pt-5 pb-5"
        style={{
          borderTop: '1px solid #999999',
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="service__box">
              <div className="service__box--icon">
                <FontAwesomeIcon icon={faTruckMoving} />
              </div>
              <div className="service__box--description">
                <div className="title">FREE SHIPPING</div>
                <p>Free shipping on all US order or order above $99</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="service__box">
              <div className="service__box--icon">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div className="service__box--description">
                <div className="title">SUPPORT 24/7</div>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="service__box">
              <div className="service__box--icon">
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
              <div className="service__box--description">
                <div className="title">30 DAYS RETURN</div>
                <p>Simply return it within 24 days for an exchange.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="service__box">
              <div className="service__box--icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="service__box--description">
                <div className="title">100% PAYMENT SECURE</div>
                <p>We ensure secure payment with PEV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
