import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
export default class SigninPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	login = () => {
		console.log('state  =' + JSON.stringify(this.state));
		axios
			.post('https://5ea82ce535f37200166089b5.mockapi.io/api/users', {
				email: this.state.email,
				password: this.state.password,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	isChange = (event) => {
		const target = event.target;
		const isName = target.name;
		const isValue = target.value;
		this.setState({
			[isName]: isValue,
		});
	};
	render() {
		return (
			<div>
				<h1>Signin Page</h1>
				<div className="text-center">
					<input
						onChange={(event) => this.isChange(event)}
						name="email"
						type="text"
					/>
					<br />
					<input
						onChange={(event) => this.isChange(event)}
						name="password"
						type="text"
					/>
					<br />
					<button onClick={() => this.login()}>Login</button>
				</div>
				<Link to="/signup">to SignUp Page</Link>
			</div>
		);
	}
}
