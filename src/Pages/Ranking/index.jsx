// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeButton from '../../Components/HomeButton';
import { ReceivePlayerRank } from '../../Services/PlayerRank';

class Ranking extends Component {
  state = {
    playerRank: [],
  }

  componentDidMount = () => {
    this.sortPlayerRank();
  }

  sortPlayerRank = () => {
    const players = ReceivePlayerRank();
    const sortfalse = -1;
    const sortedPlayers = players.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      return sortfalse;
    });
    this.setState({
      playerRank: sortedPlayers,
    });
  }

  render() {
    const { playerRank } = this.state;
    return (
      <>
        <HomeButton />
        <h1 data-testid="ranking-title">Ranking</h1>
        <div>
          {playerRank.map(({ player, image, score }, index) => (
            <div key={ index }>
              <img src={ image } alt="profile" />
              <p data-testid={ `player-name-${index}` }>{player}</p>
              <p data-testid={ `player-score-${index}` }>{score}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
