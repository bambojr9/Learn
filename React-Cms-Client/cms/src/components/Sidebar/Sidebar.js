import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleRight,
  faBorderAll,
  faEdit,
  faMap,
  faFileAlt,
  faChartBar,
  faFolder,
  faItalic,
  faUnderline,
  faUser,
  faShoppingCart,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div className="app-sidebar fixed-top">
          <div className="app-sidebar__img">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="sidebar-menu">
            <li>
              <NavLink
                // activeClassName="is-expanded"
                to="/link1+"
                className="sidebar-menu__item"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Dashboard</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+2" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faBorderAll} />
                <span>Apps</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+3" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faEdit} />
                <span>Forms</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+4" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faMap} />
                <span>Maps</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+5" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Tables</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+6" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faChartBar} />
                <span>Chart Types</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+7" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faFolder} />
                <span>Pages</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+8" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faItalic} />
                <span>Icons</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+9" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faUnderline} />
                <span>Ui Elements</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+10" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faUser} />
                <span>Account</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/link+11" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>E-commerce</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="sidebar-menu__item">
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span>Help & Support</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
