import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shoppage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={Shoppage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
