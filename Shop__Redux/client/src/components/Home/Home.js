import React, { Component } from 'react';
import Shopify1 from './Shopify1/Shopify1';
import Collection2 from './Shopify_Women’s/Collection2';
import Service from './Service/Service';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <Shopify1></Shopify1>

        <Collection2></Collection2>
        <Collection2></Collection2>
        <Service></Service>
      </div>
    );
  }
}
