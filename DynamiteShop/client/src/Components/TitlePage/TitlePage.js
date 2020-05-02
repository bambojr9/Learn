import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TitlePage extends Component {
  render() {
    return (
      <div className="title-page">
        <div className="breadcrumb">
          <div className="container">
            <Link to="#" className="breadcrumb-item">
              Home
            </Link>
            <span to="#" className="breadcrumb-item">
              All products
            </span>
            <h2 className="float-right">All products</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePage;
