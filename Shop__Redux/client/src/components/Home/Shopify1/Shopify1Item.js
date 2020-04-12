import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default class ShopifyItem1 extends Component {
	render() {
		return (
			<div className="col-sm-6 col-md-6 mt-4">
				<div className="layout-promo-box">
					<Link  to="#">
						<img
							className="img-fluid layout-promo-box__img"
							src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/lay20_01_600x.png?v=1551554827"
							alt=""
						/>
					</Link>
					<Link className="layout-promo-box__title-small"  to="#">
						Mens
					</Link>
				</div>
			</div>
		);
	}
}
