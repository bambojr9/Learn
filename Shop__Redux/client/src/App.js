import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Shopify from './components/Shopify/Shopify';
import Demo from './components/Demo/Demo';
import Test from './dulieu/Test';
// import Product from "./components/Product/Product";

function App() {
	return (
		<Router>
			<Header></Header>
			<section className="shopify">
				<div className="container">
					<div className="row">
						<Shopify></Shopify>
						<Shopify></Shopify>
						<Shopify></Shopify>
						<Shopify></Shopify>
					</div>
				</div>
				{/* <Product></Product> */}
			</section>
			<Demo></Demo>
			<Test></Test>
		</Router>
	);
}

export default App;
