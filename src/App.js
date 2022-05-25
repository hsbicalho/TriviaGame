import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Jogo from './Pages/Jogo';
import Configuracao from './Pages/Configuracao';
// import Configuracao from './Pages/Configuracao/Configuracao';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Login /> } />
      <Route path="/jogo" render={ () => <Jogo /> } />
      <Route path="/configuracao" render={ () => <Configuracao /> } />

    </Switch>
  );
}
