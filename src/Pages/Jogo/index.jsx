import React, { Component } from 'react';
import CardPergunta from '../../Components/CardPergunta';

const perguntas = {
  response_code: 0,
  results: [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'The programming language &#039;Swift&#039; was created'
      + ' to replace what other programming language?',
      correct_answer: 'Objective-C',
      incorrect_answers: [
        'C#',
        'Ruby',
        'C++',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which computer hardware device provides an interface'
      + 'for all other connected devices to communicate?',
      correct_answer: 'Motherboard',
      incorrect_answers: [
        'Central Processing Unit',
        'Hard Disk Drive',
        'Random Access Memory',
      ],
    },
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'hard',
      question: 'When did Lithuania declare independence from the Soviet Union?',
      correct_answer: 'March 11th, 1990',
      incorrect_answers: [
        'December 25th, 1991',
        'December 5th, 1991',
        'April 20th, 1989',
      ],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'In 2004, which person(s) created &quot;Roblox&quot;?',
      correct_answer: 'David Baszucki and Erik Cassel',
      incorrect_answers: [
        'Erik Cassel',
        'Jonas Alto and Sarah Smith',
        'James Kolein',
      ],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What is the most commonly used noun in the English language?',
      correct_answer: 'Time',
      incorrect_answers: [
        'Home',
        'Water',
        'Man',
      ],
    },
  ],
};

class Jogo extends Component {
  constructor() {
    super();
    this.state = {
      triviaQuests: perguntas,
    };
  }

  // componentDidMount() {
  //   fetchApi();
  // }

  // fetchApi = async () => {
  //   const firstRequest = await fetch('https://opentdb.com/api_token.php?command=request');
  //
  //   this.setState({ isLoading: false });
  // }

  render() {
    const { triviaQuests: { results } } = this.state;
    console.log(results[0]);
    return (
      <div>
        <h1>ASDSA</h1>
        <CardPergunta objPergunta={ results[0] } />
      </div>
    );
  }
}

export default Jogo;
