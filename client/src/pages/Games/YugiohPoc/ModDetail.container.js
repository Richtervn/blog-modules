import _ from 'underscore';
import { connect } from 'react-redux';
import ModDetail from './ModDetail.component';

export default connect(({ yugiohPoc }) => ({
  mod: _.findWhere(yugiohPoc.mods, { _id: yugiohPoc.focusMod }),
  decks: yugiohPoc.decks
}))(ModDetail);
