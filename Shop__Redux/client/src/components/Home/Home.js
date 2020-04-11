import React, { Component } from 'react';
import Shopify1 from './Shopify1/Shopify1';
import Shopify2 from './Shopify_Women’s/Shopify2';
import Service from './Service/Service';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <Shopify1></Shopify1>

        <Shopify2></Shopify2>
        <Shopify2></Shopify2>
        <Service></Service>
      </div>
    );
  }
}
