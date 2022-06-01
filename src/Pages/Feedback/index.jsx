import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

class Feedback extends Component {
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
const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});
Feedback.propTypes = {
  stateHits: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  location: PropTypes.shape().isRequired,
};
export default connect(mapStateToProps)(Feedback);
