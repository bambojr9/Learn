import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Slider, Switch } from 'antd';
class SidebarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      price: [0, 2000],
    };
  }
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  };
  handleValueChange = (value) => {
    let price = [];
    value.forEach((value) => price.push(value * 20));
    console.log(price);
    this.setState({
      price: price,
    });
  };
  render() {
    const { disabled } = this.state;
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
            <li className="product-category__item">
              <Link className="product-category__link" to="/">
                Digital goods
              </Link>
            </li>
          </ul>
        </div>
        <div className="price-filter">
          <h3 className="title">FILTER BY PRICE</h3>
          <div>
            <Slider
              onChange={(value) => this.handleValueChange(value)}
              range
              defaultValue={[0, 2000]}
              disabled={disabled}
            />
            Disabled:
            <Switch
              size="small"
              checked={disabled}
              onChange={this.handleDisabledChange}
            />
            <span className="float-right">
              Price: ${this.state.price[0]} - ${this.state.price[1]}
            </span>
          </div>
        </div>
      </aside>
    );
  }
}
export default SidebarLeft;
