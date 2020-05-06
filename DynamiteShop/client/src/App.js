import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import HeaderMobile from './Components/Header/HeaderMobile';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProducts from './Components/AllProducts/AllProducts';
import ClothesFootwearItem from './Components/ClothesFootwearItem/ClothesFootwearItem';
import DigitalGoods from './Components/DigitalGoods/DigitalGoods';
import ClothesFootwear from './Components/ClothesFootwear/ClothesFootwear';
import Home from './Components/Home/Home';
import Sale from './Components/Sale/Sale';
import ProductsDetail from './Components/ProductsDetail/ProductsDetail';
import EEEE from './Components/Error/EEEE';

function App() {
  return (
    <Router>
      <Header></Header>
      <HeaderMobile></HeaderMobile>
      <Switch>
        <Route exact path={['/', '/Home']} component={Home} />
        <Route path="/all-products" component={AllProducts} />
        <Route
          path="/product-category/:slug/:name"
          component={ClothesFootwearItem}
        />
        <Route
          path="/product-category/digital-goods"
          component={DigitalGoods}
        />
        <Route path="/product-category/:name" component={ClothesFootwear} />
        <Route path="/sale" component={Sale} />
        <Route
          path="/product/:name.:id.html"
          component={ProductsDetail}
        ></Route>
        <Route path="/product" component={ProductsDetail}></Route>
        <Route path="" component={EEEE} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
