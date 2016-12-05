// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/create">Create Deck</Link></li>
          <li><Link to="/decks">View Decks</Link></li>
        </ul>
      </nav>
    );
  }
}
