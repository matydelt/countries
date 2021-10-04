import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import { filterOrderName, filterOrderPopulation } from './functions/filters';
import { getCountries } from "./redux/actions"
// import {}

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => (<Landing />)} />
      <Route path="/home" strict render={() => (<Home filterOrderName={filterOrderName} filterOrderPopulation={filterOrderPopulation} getCountries={getCountries} />)} />
    </div>
  );
}

export default App;
