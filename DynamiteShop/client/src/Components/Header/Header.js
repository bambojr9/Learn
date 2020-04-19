import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMobileAlt,
  faShoppingBasket,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  return (
    <Router>
      <header id="header" className="header-bar">
        <div className="container">
          <div className="branding d-none d-xl-flex ">
            <NavLink className="branding__logo" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <div className="branding__oHour branding__ope">
              <FontAwesomeIcon icon={faClock} />
              <div>
                <p>Mon - Fri: 10:00 - 19:00</p>
                <p>Sat, Sun: 11:00 - 17:00</p>
              </div>
            </div>
            <div className="branding__contact branding__ope">
              <FontAwesomeIcon icon={faMobileAlt} />
              <div>
                <p>001-234-5679</p>
                <p>001-987-6543</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation d-none d-xl-flex">
          <div className="container d-flex justify-content-between">
            <ul className="main-nav">
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  All products
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  t-shirts
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  hoddies
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  footwear
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  digital goods
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to="/">
                  sale!
                </NavLink>
              </li>
            </ul>
            <ul className="mini-nav">
              <li className="mini-nav__item">
                <NavLink className="mini-nav__link" to="/">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Login</span>
                </NavLink>
              </li>
              <li className="mini-nav__item">
                <NavLink className="mini-nav__link" to="/">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </NavLink>
              </li>
              <li className="mini-nav__item">
                <NavLink className="mini-nav__link" to="/">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  <span>$999</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Router>
  );
}

export default Header;
