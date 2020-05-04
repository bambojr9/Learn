import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import HeaderMobile from './Components/Header/HeaderMobile';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProducts from './Components/AllProducts/AllProducts';
import TShirts from './Components/TShirts/TShirts';
import Hoddies from './Components/Hoddies/Hoddies';
import Footwear from './Components/Footwear/Footwear'
import DigitalGoods from './Components/DigitalGoods/DigitalGoods'
import ClothesFootwear from './Components/ClothesFootwear/ClothesFootwear'
import Home from './Components/Home/Home';
import EEEE from './Components/Error/EEEE';

function App() {
  return (
    <Router>
      <Header></Header>
      <HeaderMobile></HeaderMobile>
      <Switch>
        <Route exact path={['/', '/Home']} component={Home} />
        <Route path="/all-products" component={AllProducts} />
        <Route path="/product-category/clothes-footwear/t-shirts" component={TShirts} />
        <Route path="/product-category/clothes-footwear/hoodies" component={Hoddies} />
        <Route path="/product-category/clothes-footwear/footwear" component={Footwear} />
        <Route path="/product-category/digital-goods" component={DigitalGoods} />
        <Route path="/product-category/clothes-footwear" component={ClothesFootwear} />
        <Route path="" component={EEEE} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
