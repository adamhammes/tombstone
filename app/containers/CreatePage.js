// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DeckActions from '../actions/deck';
import DeckCreator from '../components/DeckCreator';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DeckActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCreator);
