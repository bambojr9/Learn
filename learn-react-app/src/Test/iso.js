import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import dulieujson from '../../../dulieu/dulieu.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import CardItem from '../../cpn/CardItem';

function Shopify2(props) {
	const [ImgId, setImgId] = useState(1);
	function handleClick(id) {
		console.log(id);
		setImgId(id);
	}
	// list items
	let listItems = () => {
		// Ktra Ton tai Data
		if (dulieujson) {
			//  duyet mang lay id
			return dulieujson.map((value) => {
				//so sanh id trong Data voi id cua State imgID
				if (value.id === ImgId) {
					return (
						<div className="row justify-content-center mt-5">
							{value.url.map((item) => (
								// <CardItem src={item} onClick={(imgId) => handleClick(value.id)}></CardItem>
								<div
									onClick={(imgId) => handleClick(value.id)}
									className="col-3 "
								>
									<div className="shopify__product">
										<Link to="#" className="shopify__product--img">
											<img src={item} alt="" className="img-fluid" />
										</Link>
										<div className="shopify__product--description ">
											<div className="info d-flex justify-content-lg-between">
												<div className="info__name">
													<Link to="#">ZARA </Link>
												</div>
												<div className="rating">
													<span>
														<Link to="#">
															<FontAwesomeIcon icon={faStar} />
															<FontAwesomeIcon icon={faStar} />
															<FontAwesomeIcon icon={faStar} />
															<FontAwesomeIcon icon={faStar} />
															<FontAwesomeIcon icon={faStar} />
														</Link>
													</span>
												</div>
											</div>
											<div className="title">
												<Link to="#">Standard Fit Sport Shirt</Link>
											</div>
											<div className="price  d-flex">
												<Link to="#">$888</Link>
												<Link to="#" className="price-sale">
													$888
												</Link>
											</div>
											<button type="button" className="btn btn-primary mt-3">
												<FontAwesomeIcon icon={faShoppingBag} />
												<span>ADD TO CART</span>
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					);
				}
			});
		}
	};

	return (
		<Router>
			<section className="shopify shopify2">
				<div className="container">
					<div className="shopify__nav">
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<Link
									onClick={(id) => handleClick(1)}
									to="#"
									className="nav-link "
								>
									Sale
								</Link>
							</li>
							<li className="nav-item">
								<Link
									onClick={(id) => handleClick(2)}
									to="#"
									className="nav-link"
								>
									ACCESSORIES
								</Link>
							</li>
							<li className="nav-item">
								<Link
									onClick={(id) => handleClick(3)}
									to="#"
									className="nav-link"
								>
									WOMEN
								</Link>
							</li>
							<li className="nav-item">
								<Link
									onClick={(id) => handleClick(4)}
									to="#"
									className="nav-link"
								>
									Mens
								</Link>
							</li>
						</ul>
					</div>
					{listItems()}
				</div>
			</section>
		</Router>
	);
}

export default Shopify2;
