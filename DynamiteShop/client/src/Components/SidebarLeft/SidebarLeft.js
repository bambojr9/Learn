import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default class SidebarLeft extends Component {
  render() {
    return (
      <aside className="sidebar-left">
        <div className="searchBar">
          <h3 className="title">Search</h3>
          <div className="search">
            <input type="search" placeholder="Search products..." />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        <div className="category">
          <h3 className="title">CATEGORIES</h3>
          <ul className="product-category">
            <li className="product-category__item">
              <Link className="product-category__link" to="/">
                Clothes & Footwear
              </Link>
              <ul className="children">
                <li className="product-category__item">
                  <Link className="product-category__link" to="/">
                    Footwear
                  </Link>
                </li>
                <li className="product-category__item">
                  <Link className="product-category__link" to="/">
                    Hoodies
                  </Link>
                </li>
                <li className="product-category__item">
                  <Link className="product-category__link" to="/">
                    T-Shirts
                  </Link>
                </li>
              </ul>
            </li>
            <li className="product-category__item" className="product-category">
              <Link className="product-category__link" to="/">
                Digital goods
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
