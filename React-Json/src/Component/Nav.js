import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                  <div className="header-page">
        {/*main-nav*/}
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container navbar__main">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon navbar__main--icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
            
              <ul className="navbar-nav ml-auto mr-auto">

              <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tin">Tin</Link>
          </li>
          {/* <li>
            <Link to="/tin-tuc/">Tin-Chi-Tiet</Link>
          </li> */}
          <li>
            <Link to="/lien-he">Contact</Link>
          </li>
            
              </ul>
            </div>
          </div>
        </nav>
      </div>
            </div>
        )
    }
}
