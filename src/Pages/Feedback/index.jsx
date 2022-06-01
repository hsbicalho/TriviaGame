import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Header from '../../Components/Header';
import { SavePlayerRank } from '../../Services/PlayerRank';
import { playerScore } from '../../redux/actions';

class Feedback extends Component {
  componentDidMount = () => {
    this.savePlayerInRanking();
  }

  componentWillUnmount() {
    const { updateScore } = this.props;
    updateScore(0);
  }

  savePlayerInRanking = () => {
    const { score, name, email } = this.props;
    const hash = md5(email).toString();
    const image = `https://www.gravatar.com/avatar/${hash}`;
    const token = localStorage.getItem('token');
    SavePlayerRank(name, score, image, token);
  }

  render() {
    const minScore = 3;
    const { location: { state: { stateHits } }, score } = this.props;
    return (
      <>
        <Header />
        { (stateHits < minScore)
          ? (<h1 data-testid="feedback-text">Could be better...</h1>)
          : (<h1 data-testid="feedback-text">Well Done!</h1>) }
        <div>
          <span data-testid="feedback-total-score">{ score }</span>
          <span>/</span>
          <span data-testid="feedback-total-question">0</span>
        </div>
        <Link to="/">
          <button data-testid="btn-play-again" type="button">Play Again</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking" type="button">Ranking</button>
        </Link>
      </>
    );
  }
}

Feedback.propTypes = {
  stateHits: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  location: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateScore: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
  name: player.name,
  email: player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  updateScore: (userScore) => dispatch(playerScore(userScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
