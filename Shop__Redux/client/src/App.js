import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
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
			<Home></Home>
			<Footer></Footer>

			<div className="form-group">
				<input
					onFocus={() => onFocus()}
					onBlur={() => onBlur()}
					type="text"
					className="form-control"
					aria-describedby="helpId"
				/>
			</div>
		</Router>
	);
}

export default App;
