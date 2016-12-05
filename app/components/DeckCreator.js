import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

const START_NUM_ROWS = 16;

const isComplete = (card) => card.prompt !== '' && card.prompt !== '';

export default class DeckCreator extends React.Component {
  constructor(props) {
    super(props);

    const cards = [];
    for (let i = 0; i < START_NUM_ROWS; i += 1) {
      cards.push({
        id: i,
        prompt: '',
        answer: ''
      });
    }

    this.state = {
      cards,
      name: ''
    };

    this.nameChange = this.nameChange.bind(this);
  }

  promptChange(i, event) {
    const newCards = this.state.cards.slice();
    newCards[i].prompt = event.target.value;

    this.setState({ cards: newCards });
  }

  answerChange(i, event) {
    const newCards = this.state.cards.slice();
    newCards[i].answer = event.target.value;

    this.setState({ cards: newCards });
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const completedCards = this.state.cards.filter(isComplete);
    this.props.addDeck(this.state.name, completedCards);

    hashHistory.push('/decks');
    event.preventDefault();
  }

  render() {
    const inputs = this.state.cards.map((card, i) => (
      <li key={i}>
        <input
          value={card.prompt}
          onChange={this.promptChange.bind(this, i)}
        />
        <input
          value={card.answer}
          onChange={this.answerChange.bind(this, i)}
        />
      </li>
    ));

    return (
      <div className="deckCreator">
        <input
          className="nameInput"
          value={this.state.name}
          onChange={this.nameChange.bind(this)}
        />
        <ul>
          {inputs}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button>Create!</button>
        </form>
      </div>
    );
  }
}

DeckCreator.propTypes = {
  addDeck: React.PropTypes.func
};
