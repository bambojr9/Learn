import React, { Component } from 'react';
import Shopify1Item from './Shopify1Item';
export default class Shopify1	 extends Component {
	render() {
		return (
			<section className="shopify shopify1">
				<div className="container">
					<div className="row">
						<Shopify1Item></Shopify1Item>
						<Shopify1Item></Shopify1Item>
						<Shopify1Item></Shopify1Item>
						<Shopify1Item></Shopify1Item>
					</div>
				</div>
			</section>
		);
	}
}
