import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import TelaInicial from './Pages/TelaInicial';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <TelaInicial /> } />
      <Route path="/login" render={ () => <Login /> } />
    </Switch>
  );
}
