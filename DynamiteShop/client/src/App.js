import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


// import { BrowserRouter as Router, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import logo from '../logo.svg';

function App() {
  return (
   <div>
    <Header></Header>
    <Home></Home>
   </div>
  )
}

export default App;
