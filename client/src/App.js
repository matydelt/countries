import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import { getCountries } from "./redux/actions"
import About from './components/about/about';
// import {}

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => (<Landing />)} />
      <Route path="/home" strict render={() => (<Home getCountries={getCountries} />)} />
      <Route path="/country/" strict render={() => (<About />)} />
    </div>
  );
}

export default App;
