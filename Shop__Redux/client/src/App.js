import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import Product from "./components/Product/Product";

function App() {
	return (
		<Router>
			<Header></Header>
			<Home></Home>
		</Router>
	);
}

export default App;
