import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/homepage';

const Hatspage = () => {
  return (<h1>Hatspage</h1>)
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/hats"} component={Hatspage} />
        <Route path={"/"} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
