import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faMobileAlt,
	faShoppingBasket,
	faSearch,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	return (
		<header id="header" className="header-bar">
			<div className="container">
				<div className="branding d-none d-xl-flex ">
					<Link className="branding__logo" to="/">
						<img src={logo} alt="logo" />
					</Link>
					<div className="branding__oHour branding__ope">
						<FontAwesomeIcon icon={faClock} />
						<div>
							<p>Mon - Fri: 8h:00 - 19:00</p>
							<p>Sat, Sun: 9:00 - 18:00</p>
						</div>
					</div>
					<div className="branding__contact branding__ope">
						<FontAwesomeIcon icon={faMobileAlt} />
						<div>
							<p>001-234-5679</p>
							<p>001-987-6543</p>
						</div>
					</div>
				</div>
			</div>
			<nav className="navigation d-none d-xl-flex">
				<div className="container d-flex justify-content-between">
					<ul className="main-nav">
						<li className="main-nav__item">
							<Link to="/Home" className="main-nav__link">
								Home
							</Link>
						</li>
						<li className="main-nav__item">
							<Link to="/all-products" className="main-nav__link">
								All products
							</Link>
						</li>
						<li className="main-nav__item">
							<Link
								className="main-nav__link"
								to="/product-category/clothes-footwear/t-shirts"
							>
								t-shirts
							</Link>
						</li>
						<li className="main-nav__item">
							<Link
								className="main-nav__link"
								to="/product-category/clothes-footwear/hoodies"
							>
								hoddies
							</Link>
						</li>
						<li className="main-nav__item">
							<Link
								className="main-nav__link"
								to="/product-category/clothes-footwear/footwear"
							>
								footwear
							</Link>
						</li>
						<li className="main-nav__item">
							<Link
								className="main-nav__link"
								to="/product-category/digital-goods"
							>
								digital goods
							</Link>
						</li>
						<li className="main-nav__item">
							<Link className="main-nav__link" to="/sale">
								sale!
							</Link>
						</li>
					</ul>
					<ul className="mini-nav">
						<li className="mini-nav__item">
							<Link className="mini-nav__link" to="/">
								<FontAwesomeIcon icon={faUser} />
								<span>Login</span>
							</Link>
						</li>
						<li className="mini-nav__item">
							<Link className="mini-nav__link" to="/">
								<FontAwesomeIcon icon={faSearch} />
								<span>Search</span>
							</Link>
						</li>
						<li className="mini-nav__item">
							<Link className="mini-nav__link" to="/">
								<FontAwesomeIcon icon={faShoppingBasket} />
								<span>$999</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
