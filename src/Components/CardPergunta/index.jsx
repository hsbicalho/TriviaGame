import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';

class CardPergunta extends Component {
  constructor() {
    super();
    this.state = {
      questsArray: [],
    };
  }

  componentDidMount() {
    const { objPergunta: { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } } = this.props;
    const allQuests = [correctAnswer, ...incorrectAnswers];
    const randNumb = 0.5;
    allQuests.sort(() => Math.random() - randNumb);
    this.setState({ questsArray: allQuests });
  }

  render() {
    const { objPergunta: { correct_answer: correctAnswer } } = this.props;
    const { questsArray } = this.state;

    return (
      <div data-testid="answer-options">
        {questsArray.map((option, index) => {
          if (option === correctAnswer) {
            return (
              <button
                type="button"
                key="correctAnswer"
                data-testid="correct-answer"
                id="CORRETA_RESPOSTA"
              >
                {option}
              </button>);
          }
          return (
            <button
              type="button"
              data-testid={ `wrong-answer-${index}` }
              key={ Math.random() }
            >
              {option}
            </button>);
        })}
      </div>
    );
  }
}

CardPergunta.propTypes = {
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.arrayOf(string).isRequired,
  objPergunta: PropTypes.objectOf().isRequired,
};

export default CardPergunta;
