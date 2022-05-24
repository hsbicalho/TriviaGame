import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <img
          src="#"
          alt="profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">Nome do Jogador</p>
        <p data-testid="header-score">Placar: 0</p>
      </header>
    );
  }
}

export default Header;
