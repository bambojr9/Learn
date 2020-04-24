import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function HeaderMobile(props) {
  function toggleClass() {
    props.changeEditStatusClass();
  }

  return (
    <div
      className={
        'mobile-navigation-wrap ' + (props.isEditStatusClass ? 'Active' : null)
      }
    >
      <Link onClick={toggleClass}  to="/" className="mobile-navigation-button ">
        <span className="mobile-navigation-button__icon ">&nbsp;</span>
      </Link>
      <ul className="mobile-navigation ">
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/">
            Home
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/5">
            All products
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/6">
            T-shirts
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/">
            Hoodies
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/">
            Footwear
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/">
            Digital goods
          </Link>
        </li>
        <li className="mobile-navigation__item">
          <Link className="mobile-navigation__link" to="/">
            Sale!
          </Link>
        </li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEditStatusClass: state.isEditStatusClass,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatusClass: () => {
      dispatch({
        type: 'CHANGE_EDIT_STATUS_CLASS',
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
