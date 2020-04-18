import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Collections from '../components/Collections/Collections';
import Home from '../components/Home/Home';

export default class RouterIndex extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/Home" component={Home}></Route>
				<Route exact path="/Collections" component={Collections}></Route>
			</Router>
		);
	}
}
