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
    // console.log('state  =' + JSON.stringify(this.state));

    let that = this;
    // var input = this.state.email;

    // console.warn(this.state);
    const { email, password } = this.state;
    axios
      .get('https://5ea82ce535f37200166089b5.mockapi.io/api/users', {
        email: email,
        password: password,
      })
      .then(function (response) {
        // console.log('res from login :', response);
        response.data.forEach((value) => {
          if (
            that.state.email === value.email &&
            that.state.password === value.password
          ) {
            return that.props.history.push('/home');
          } else {
            return console.log('check username ,  password');
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  isChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    // console.log(this.state.email);
    // this.props.history.push('/signup');
    return (
      <div>
        <h1>Signin Page</h1>
        <div className="text-center">
          <input
            onChange={(event) => this.isChange(event)}
            name="email"
            placeholder="username"
            type="text"
          />
          <br />
          <input
            onChange={(event) => this.isChange(event)}
            name="password"
            placeholder="password"
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
