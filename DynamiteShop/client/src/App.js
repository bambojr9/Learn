import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header></Header>
			<Footer></Footer>
		</Router>
	);
}

export default App;
