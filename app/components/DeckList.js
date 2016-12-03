// @flow
import React from 'react';

export default class DeckList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.decks.map(deck =>
          <li>{deck.id}</li>
        )}
      </ul>
    );
  }
}
