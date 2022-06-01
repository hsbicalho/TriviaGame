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
    this.setState({
      playerRank: ReceivePlayerRank(),
    });
  }

  render() {
    const { playerRank } = this.state;
    return (
      <>
        <HomeButton />
        <h1 data-testid="ranking-title">Ranking</h1>
        <div>
          {playerRank.map(({ player, hits, score }, index) => (
            <div key={ index }>
              <p data-testid={ `player-name-${index}` }>{player}</p>
              <p data-testid={ `player-score-${score}` }>{score}</p>
              <p>{hits}</p>
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
