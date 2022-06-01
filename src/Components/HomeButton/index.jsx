import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends Component {
  render() {
    return (
      <Link to="/">
        <button data-testid="btn-go-home" type="button">Início</button>
      </Link>
    );
  }
}

export default HomeButton;
