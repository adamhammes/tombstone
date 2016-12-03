const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        prompt: action.prompt,
        answer: action.answer
      };

    default:
      return state;
  }
};

const deck = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const cards = [
        ...state.cards,
        card(undefined, action)
      ];

      return Object.assign({}, state, {
        cards
      });
    }

    case 'ADD_DECK':
      return {
        id: action.id,
        cards: []
      };

    default:
      return state;
  }
};

const decks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return [
        ...state,
        deck(undefined, action)
      ];

    default:
      return state;
  }
};

export default decks;
