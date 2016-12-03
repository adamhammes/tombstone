import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeckList from '../components/DeckList';

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
