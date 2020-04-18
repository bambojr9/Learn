import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Footer(props) {
	return (
		<Router>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-2 col-xl-3">
							<div className="text-box">
								<div className="text-box__title">CATEGORIES</div>
								<div className="text-box__content">
									<ul className="list-group">
										<li className="list-group__item">
											<Link to="#">Women</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Men</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Accessories</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Shoes</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">New Arrivals</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Clearence</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-2 col-xl-3">
							<div className="text-box">
								<div className="text-box__title">BUY WITH US</div>
								<div className="text-box__content">
									<ul className="list-group">
										<li className="list-group__item">
											<Link to="#">Services</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Contact Us</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">FAQs</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Privacy Policy</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Cookie Policy</Link>
										</li>
										<li className="list-group__item">
											<Link to="#">Terms and Conditions</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg col-xl-3">
							<div className="text-box">
								<div className="text-box__title">CONTACTS</div>
								<div className="text-box__content">
									<address>
										<p>
											<span>Address: </span>
											218 Van Tao, Thuong Tin, Ha Noi, Viet Nam
										</p>
										<p>
											<span>Phone:</span>
											<a className="contact-small" href="tel: 0987654321">
												+84 987654321
											</a>
										</p>
										<p>
											<span>Hours:</span>
											ALL WEEK FROM 8 AM TO 9 PM
										</p>
										<p>
											<span>E-mail: </span>
											<a className="contact-small" href="mailto:info@gmail.com">
												info@gmail.com
											</a>
										</p>
									</address>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 col-xl-3">
							<div className="text-box">
								<div className="text-box__title">NEWSLETTER SIGNUP</div>
								<div className="text-box__content">
									<p>
										Sign up for our e-mail and be the first who know our special
										offers! Furthermore, we will give a 15% discount on the next
										order after you sign up.
									</p>
									<form className="form" action="#" method="post">
										<div className="form-group">
											<input
												type="email"
												name="email"
												id="email"
												className="form-control"
												placeholder="Enter your e-mail"
											/>
											<button type="submit" className="btn btn-primary">
												GET!
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</Router>
	);
}

export default Footer;
