import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Jogo from './Pages/Jogo';

export default function App() {
  return (
    <Switch>
      <Route path="/" render={ () => <Login /> } />
      <Route path="/jogo" render={ () => <Jogo /> } />
    </Switch>
  );
}
