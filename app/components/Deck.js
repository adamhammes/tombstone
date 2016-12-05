import React from 'react';

export default class Deck extends React.Component {
  render() {
    return (
      <div className="deck">
        <h1>{this.props.deck.name}</h1>
        <div>Study</div>
        <div>Edit</div>

        <ol>
          {this.props.deck.cards.map((card) =>
            <li key={card.id}>
              <div className="tableContainer">
                <div>{card.prompt}</div>
                <div>{card.answer}</div>
              </div>
            </li>
          )}
        </ol>
      </div>
    );
  }
}

Deck.propTypes = {
  deck: React.PropTypes.shape({
    cards: React.PropTypes.arrayOf(React.PropTypes.object),
    name: React.PropTypes.string,
    id: React.PropTypes.number
  })
};
