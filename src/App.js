import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Jogo from './Pages/Jogo';
import Configuracao from './Pages/Configuracao';
import Feedback from './Pages/Feedback';
/* import Ranking from './Pages/Ranking'; */

// import Configuracao from './Pages/Configuracao/Configuracao';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/jogo" component={ Jogo } />
      <Route path="/configuracao" component={ Configuracao } />
      <Route path="/feedback" component={ Feedback } />
      {/*  <Route path="/ranking" component={ Ranking } /> */}
    </Switch>
  );
}
