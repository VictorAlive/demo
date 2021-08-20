import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/page1'>
          <h2>Page 1</h2>
        </Route>
        <Route path='/page2'>
          <h2>Page 2</h2>
        </Route>
        <Route path='/'>
          <h2>Home</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
