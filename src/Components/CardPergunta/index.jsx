import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardPergunta.css';

class CardPergunta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnsClass: 'buttonOpt',
      wrongAnsClass: 'buttonOpt',
      count: 30,
      disabled: false,
      nextButton: false,
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

  handleclick = () => {
    this.setState({
      correctAnsClass: 'buttonOpt correctOpt',
      wrongAnsClass: 'buttonOpt wrongOpt',
      nextButton: true,
    });
    this.stopCount();
  }

  stopCount = () => {
    const { count } = this.state;
    console.log(count);
    this.setState({ count: 0 });
  }

  handleNextClick = () => {
    const { nextQuestion } = this.props;
    nextQuestion();
    this.setState({
      correctAnsClass: 'buttonOpt',
      wrongAnsClass: 'buttonOpt',
      nextButton: false,
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
  nextQuestion: PropTypes.func.isRequired,
};

export default CardPergunta;

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
