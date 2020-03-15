import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
        <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Details" component={Details} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>    
    </React.Fragment>
  );
}

export default App;
