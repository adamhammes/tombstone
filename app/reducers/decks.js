function pickId(alreadyUsed) {
  for (let i = 0; ; i += 1) {
    if (!alreadyUsed.includes(i)) {
      return i;
    }
  }
}

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

      return Object.assign({}, state, { cards });
    }

    case 'ADD_DECK':
      return {
        id: action.id,
        name: action.name,
        cards: action.cards || []
      };

    default:
      return state;
  }
};

const decks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DECK': {
      const id = pickId(state.map((d) => d.id));
      const withId = Object.assign({}, action, { id });

      return [
        ...state,
        deck(undefined, withId)
      ];
    }

    default:
      return state;
  }
};

export default decks;
