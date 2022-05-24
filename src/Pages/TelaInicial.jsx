import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';

export default class TelaInicial extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Link
            to="/login"
          >
            Início
          </Link>
        </header>
      </div>
    );
  }
}
