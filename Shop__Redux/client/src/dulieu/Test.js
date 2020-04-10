import React, { useState } from 'react';
import dulieujson from './dulieu.json';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function Test(props) {
	const [img, setImg] = useState(1);
	return (
		<Router>
			<div className="mt-5">
				<div className="container">
					{dulieujson.map((value) => {
						if (value.id === img) {
							return (
								<div className="row">
									{value.url.map((item) => (
										<div className="col-3 ">
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
