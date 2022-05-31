import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardPergunta.css';
import { connect } from 'react-redux';
import calcScore from '../../Services/CalculateScore';
import { playerScore } from '../../redux/actions';

class CardPergunta extends Component {
  constructor(props) {
    super(props);
    const { questObj } = this.props;
    const { difficulty } = questObj;
    this.state = {
      correctAnsClass: 'buttonOpt',
      wrongAnsClass: 'buttonOpt',
      count: 30,
      disabled: false,
      nextButton: false,
      difficulty,
      sumScore: 0,
    };
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.updateTimer = setInterval(() => {
      const { count } = this.state;
      this.setState({ count: count - 1 });
    }, oneSecond);
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;
    if (!prevState.disabled && !count) {
      this.setState({ disabled: true });
    }
    if (count === 0) {
      clearInterval(this.updateTimer);
    }
  }

  handleclick = ({ target }) => {
    this.setState({
      correctAnsClass: 'buttonOpt correctOpt',
      wrongAnsClass: 'buttonOpt wrongOpt',
      nextButton: true,
    }, () => this.stopCount(target.className));
    const { count, difficulty } = this.state;
    console.log(count, difficulty);
  }

  tempFunc = () => {
    const { difficulty, count } = this.state;
    const newScore = calcScore(difficulty, count);
    this.setState((prevState) => ({
      sumScore: prevState.sumScore + newScore,
    }));
  }

  stopCount = async (optionClass) => {
    const { updateScore } = this.props;
    if (optionClass === 'buttonOpt correctOpt') {
      await this.tempFunc();
      const { sumScore } = this.state;
      updateScore(sumScore);
    }
    /* this.setState({ count: 0 }); */
  }

  handleNextClick = () => {
    const { nextQuestion } = this.props;
    nextQuestion();
    this.setState({
      correctAnsClass: 'buttonOpt',
      wrongAnsClass: 'buttonOpt',
      nextButton: false,
      disabled: false,
      count: 30,
    });
  }

  render() {
    const { options, position,
      questObj: { category, question: title, correct_answer: correctAns } } = this.props;
    const { correctAnsClass, wrongAnsClass, nextButton, count, disabled } = this.state;
    return (
      <div>
        <h2 data-testid="question-category">{category}</h2>
        <section>
          <h2 data-testid="question-text">{title}</h2>
          <div data-testid="answer-options">
            {options.map((option, index) => (
              <button
                type="button"
                key={ index }
                data-testid={ option === correctAns
                  ? 'correct-answer' : `wrong-answer-${position}` }
                className={ option === correctAns
                  ? correctAnsClass : wrongAnsClass }
                onClick={ this.handleclick }
                disabled={ disabled }
              >
                {option}
              </button>
            ))}
          </div>
          <span>{ count }</span>
          {nextButton && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNextClick }
            >
              next
            </button>
          )}
        </section>
      </div>
    );
  }
}

CardPergunta.propTypes = {
  questObj: PropTypes.shape({
    category: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateScore: (userScore) => dispatch(playerScore(userScore)),
});

export default connect(null, mapDispatchToProps)(CardPergunta);

// componentDidMount() {
//   const { questObj: { question } } = this.props;
//   // Ref: https://stackoverflow.com/questions/43011224/how-to-convert-string-with-039-convert-to-standard-charater
//   const newTitle = question.replace(/&amp;/g, '&')
//     .replace(/&lt;/g, '<')
//     .replace(/&gt;/g, '>')
//     .replace(/&quot;/g, '"')
//     .replace(/&#039;/g, '\'');
//   this.setState({ title: newTitle });
//   this.shuffleOptions();
// }
