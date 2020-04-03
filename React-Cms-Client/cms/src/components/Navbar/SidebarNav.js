import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faEnvelope,
  faBell,
  faCogs,
  faCalendarAlt,
  faQuestionCircle,
  faSignOutAlt,
  faAlignRight
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import female2 from "../../assets/img/faces/female/2.jpg";
import female3 from "../../assets/img/faces/female/3.jpg";
import female4 from "../../assets/img/faces/female/4.jpg";
import male1 from "../../assets/img/faces/male/1.jpg";
import male2 from "../../assets/img/faces/male/2.jpg";
import reboot from "../../assets/img/sever/reboot.jpg";
import comment from "../../assets/img/sever/comment.png";
export default class SidebarNav extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              {<FontAwesomeIcon icon={faAlignRight} />}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-nav-one aaaaaaaaaaaaaaaaaaaaaaa">
                {/* item1 */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Default Settings
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/">
                      Manage Profile
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Themes
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Passwords
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Payment methods
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Other Settings
                    </NavLink>
                  </div>
                </li>
                {/* item2  */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Projects
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/">
                      Active
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      UsersMarketing
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Users
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Development
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Settings
                    </NavLink>
                  </div>
                </li>
              </ul>
              {/* form  */}
              <form className="form-inline my-2 my-lg-0 mr-4 ml-lg-auto">
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              {/* navbar-twooo  */}
              <ul className="navbar-nav navbar-nav-two aaaaaaaaaaaaaaaaaaaa">
                {/* item1 */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {<FontAwesomeIcon icon={faUser} />}
                  </NavLink>
                  {/* item1  */}
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* item1__1  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item my-dropdown-item-special  d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={male1} alt="" />
                      </span>
                      <div className="text-box">
                        <strong>Madeleine Scott</strong> sent you friend request
                        <div className=" mt-2 small text-muted">
                          <span className="btn btn-sm btn-primary">
                            Conform
                          </span>
                          <span className="btn btn-sm btn-outline-primary">
                            Delete
                          </span>
                        </div>
                      </div>
                    </NavLink>
                    {/* item1__2  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item my-dropdown-item-special  d-flex justify-content-end"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={female2} alt="female2" />
                      </span>
                      <div className="text-box">
                        <strong>rebica</strong> sent you friend request
                        <div className=" mt-2 small text-muted">
                          <span className="btn btn-sm btn-primary">
                            Conform
                          </span>
                          <span className="btn btn-sm btn-outline-primary">
                            Delete
                          </span>
                        </div>
                      </div>
                    </NavLink>
                    {/* item1__3  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item my-dropdown-item-special d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={male2} alt="male2" />
                      </span>
                      <div className="text-box">
                        <strong>Devel Robott</strong> sent you friend request
                        <div className=" mt-2 small text-muted">
                          <span className="btn btn-sm btn-primary">
                            Conform
                          </span>
                          <span className="btn btn-sm btn-outline-primary">
                            Delete
                          </span>
                        </div>
                      </div>
                    </NavLink>
                    {/* item1__4  */}
                    <div className="dropdown-divider"></div>
                    <NavLink
                      className="dropdown-item my-dropdown-item    text-center"
                      to="/"
                    >
                      View all Requestes
                    </NavLink>
                  </div>
                </li>
                {/* item2  */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {<FontAwesomeIcon icon={faEnvelope} />}
                  </NavLink>
                  {/* item2  */}
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* item2__1  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    text-center"
                      to="/"
                    >
                      21 New Messages
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    {/* item2__2  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={female3} alt="female3" />
                      </span>
                      <div className="text-box">
                        <strong>Jang nara</strong> Hey! there I'm avaiable...
                        <div>
                          <small>3 hours ago</small>
                        </div>
                      </div>
                    </NavLink>
                    {/* item2__3  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={female4} alt="female4" />
                      </span>
                      <div className="text-box">
                        <strong>Riya Sanyal </strong> New product Launching...
                        <div>
                          <small>3 hours ago</small>
                        </div>
                      </div>
                    </NavLink>
                    {/* item2__4  */}
                    <div className="dropdown-divider"></div>
                    <NavLink
                      className="dropdown-item my-dropdown-item    text-center"
                      to="/"
                    >
                      See All Messages
                    </NavLink>
                  </div>
                </li>
                {/* item3  */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {<FontAwesomeIcon icon={faBell} />}
                  </NavLink>
                  {/* item3  */}
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* item3__1  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={female3} alt="female3" />
                      </span>
                      <div className="text-box">
                        <strong>Someone Like our posts...</strong>
                        <div>
                          <small>3 hours ago</small>
                        </div>
                      </div>
                    </NavLink>
                    {/* item2__2  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={comment} alt="comment" />
                      </span>
                      <div className="text-box">
                        <strong>15 News comments...</strong>
                        <div>
                          <small>5 hours ago</small>
                        </div>
                      </div>
                    </NavLink>
                    {/* item2__3  */}
                    <NavLink
                      className="dropdown-item my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar brround align-self-center">
                        <img src={reboot} alt="reboot" />
                      </span>
                      <div className="text-box">
                        <strong>Sever Rebooted </strong>
                        <div>
                          <small>45 mintues ago</small>
                        </div>
                      </div>
                    </NavLink>
                    {/* item2__4  */}
                    <div className="dropdown-divider"></div>
                    <NavLink
                      className="dropdown-item my-dropdown-item    text-center"
                      to="/"
                    >
                      View all Notification
                    </NavLink>
                  </div>
                </li>
                {/* item4 */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={female3} alt="female1" />
                    Rainy Plaheace
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/">
                      <h5>WELCOME</h5>
                    </NavLink>
                    <NavLink
                      className="dropdown-item  my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar avatar--form brround align-self-center">
                        {<FontAwesomeIcon icon={faUser} />}
                      </span>
                      <div className="text-box">My profile</div>
                    </NavLink>
                    <NavLink
                      className="dropdown-item  my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar avatar--form brround align-self-center">
                        {<FontAwesomeIcon icon={faCogs} />}
                      </span>
                      <div className="text-box">Settings</div>
                    </NavLink>
                    <NavLink
                      className="dropdown-item  my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar  avatar--form brround align-self-center ">
                        {<FontAwesomeIcon icon={faCalendarAlt} />}
                      </span>
                      <div className="text-box">Activity</div>
                    </NavLink>
                    <NavLink
                      className="dropdown-item  my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar  avatar--form brround align-self-center ">
                        {<FontAwesomeIcon icon={faQuestionCircle} />}
                      </span>
                      <div className="text-box">Support</div>
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink
                      className="dropdown-item  my-dropdown-item    d-flex"
                      to="/"
                    >
                      <span className="avatar  avatar--form brround align-self-center ">
                        {<FontAwesomeIcon icon={faSignOutAlt} />}
                      </span>
                      <div className="text-box">
                        Logout
                        <div>
                          <small>Thanks</small>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </li>
              </ul>
              {/* end navbar two   */}
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}
