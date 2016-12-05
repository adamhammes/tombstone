// @flow
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const makeUrl = (deck) => `/decks/${deck.id}`;

export default class DeckList extends React.Component {
  render() {
    const items = this.props.decks.map((deck) => (
      <Link to={makeUrl(deck)} key={deck.id}><li>{deck.name}</li></Link>
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
