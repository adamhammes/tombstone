// @flow
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class DeckList extends React.Component {
  render() {
    const items = this.props.decks.map((deck) => (
      <li key={deck.id}>{deck.name}</li>
    ));

    return (
      <div>
        <Link to="/">Home</Link>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

DeckList.propTypes = {
  decks: React.PropTypes.arrayOf(PropTypes.object)
};
