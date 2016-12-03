// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Create Deck</li>
          <li><Link to="/study">Study</Link></li>
        </ul>
      </nav>
    );
  }
}
