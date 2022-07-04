import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  convertEmailHash = (email) => {
    const hash = md5(email).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return url;
  }

  render() {
    const { name, score, email } = this.props;
    const imgUrl = this.convertEmailHash(email);
    return (
      <header
        className="jogo-page-header"
      >
        <img
          src={ imgUrl }
          alt="profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  score: player.score,
  email: player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
