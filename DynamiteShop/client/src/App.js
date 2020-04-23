import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AllProducts from './Components/AllProducts/AllProducts';
import Home from './Components/Home/Home';
import EEEE from './Components/Error/EEEE';

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path={['/' , '/Home']} component={Home} />
				<Route path="/all-products" component={AllProducts} />
				<Route component={EEEE} />
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
