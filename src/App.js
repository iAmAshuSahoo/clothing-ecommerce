import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/homepage';
import Shoppage from './pages/ShopPage/Shoppage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/shop"} component={Shoppage} />
        <Route path={"/"} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
