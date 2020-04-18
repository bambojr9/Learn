import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RouterIndex from './router/RouterIndex';
// import Product from "./components/Product/Product";

function App() {
	var onFocus = () => {
		console.log('test onFocus');
	};
	var onBlur = () => {
		console.log('Test onBlur');
	};
	return (
		<Router>
			<Header></Header>
			<RouterIndex></RouterIndex>
			<Footer></Footer>

			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								onFocus={() => onFocus()}
								onBlur={() => onBlur()}
								type="text"
								className="form-control"
								aria-describedby="helpId"
							/>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
