import React, { useState } from 'react';
import dulieujson from '../dulieu/dulieu.json';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function Test(props) {
	const [img, setImg] = useState(1);
	var handleClick = (item) => {
		setImg(item);
		console.log(img);
	};
	return (
		<Router>
			<div>
				<Link onClick={(item) => handleClick(1)}>so 111111111</Link>
				<Link onClick={() => handleClick(2)}>so 2222222</Link>
				<Link onClick={() => handleClick(3)}>so 33333333</Link>
			</div>
			<div className="mt-5">
				<div className="container">
					{/* duyet mang lay id  */}
					{dulieujson.map((value) => {
						if (value.id === img) {
							//neu bang state luc dau thi` ok
							return (
								<div className="row">
									{value.url.map((item) => (
										<div
											onClick={(item) => handleClick(value.id)}
											className="col-3 "
										>
											<img src={item} alt="" className="img-fluid" />
										</div>
									))}
								</div>
							);
						}
					})}
				</div>
			</div>
		</Router>
	);
}

export default Test;
