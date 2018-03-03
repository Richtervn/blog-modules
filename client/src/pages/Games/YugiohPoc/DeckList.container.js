import { connect } from 'react-redux';
import DeckList from './DeckList.component';

export default connect(({ yugiohPoc }) => ({
  decks: yugiohPoc.decks
}))(DeckList);
