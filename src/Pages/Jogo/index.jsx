import React, { Component } from 'react';
import propTypes from 'prop-types';
import CardPergunta from '../../Components/CardPergunta';
// import Header from '../../Components/Header';

class Jogo extends Component {
  constructor() {
    super();
    this.state = {
      triviaQuests: [],
      triviaOptions: [],
      qstIndex: 0,
      validToken: false,
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const logoutCode = 3;
    const userToken = localStorage.getItem('token');
    const randNum = 0.5;

    try {
      const firstRequest = await fetch(`https://opentdb.com/api.php?amount=5&token=${userToken}`);
      const result = await firstRequest.json();

      if (result.response_code === logoutCode) {
        localStorage.removeItem('token');
        history.push('/');
      }

      const options = result.results.map(({
        correct_answer: corAnswer,
        incorrect_answers: incAnswer }) => ([
        ...incAnswer, corAnswer,
      ].sort(() => Math.random() - randNum)));

      this.setState({
        triviaQuests: result.results,
        triviaOptions: options,
        validToken: true,
      });
    } catch (e) {
      console.error(e);
    }
  }

  incIndex = () => {
    this.setState((prevstate) => ({
      qstIndex: prevstate.qstIndex + 1,
    }));
  }

  render() {
    const { triviaQuests, qstIndex, triviaOptions, validToken } = this.state;
    return (
      <div>
        {validToken ? (<CardPergunta
          questObj={ triviaQuests[qstIndex] }
          options={ triviaOptions[qstIndex] }
          position={ qstIndex }
        />) : ''}
      </div>
    );
  }
}

Jogo.propTypes = {
  history: propTypes.shape().isRequired,
};

export default Jogo;
