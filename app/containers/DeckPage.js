import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Deck from '../components/Deck';

function mapStateToProps(state, myProps) {
  const deckToView = state.decks.find((deck) =>
    deck.id.toString() === myProps.params.deckId
  );
  return {
    deck: deckToView
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
