// @flow
export const ADD_DECK = 'ADD_DECK';

export function addDeck(name, cards) {
  return {
    type: ADD_DECK,
    cards,
    name
  };
}
