import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardPergunta.css';

class CardPergunta extends Component {
  constructor() {
    super();
    this.state = {
      correctAnsClass: 'buttonOpt',
      wrongAnsClass: 'buttonOpt',
    };
  }

  handleclick = () => {
    this.setState({
      correctAnsClass: 'buttonOpt correctOpt',
      wrongAnsClass: 'buttonOpt wrongOpt',
    });
  }

  render() {
    const { options, position,
      questObj: { category, question: title, correct_answer: correctAns } } = this.props;
    const { correctAnsClass, wrongAnsClass } = this.state;
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
              >
                {option}
              </button>
            ))}
          </div>
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
