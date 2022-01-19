import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/homepage';
import Shoppage from './pages/ShopPage/Shoppage';
import SignUpSignInPage from './pages/SignUpSignInPage/SignUpSignInPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/signin"} component={SignUpSignInPage} />
        <Route path={"/shop"} component={Shoppage} />
        <Route path={"/"} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
