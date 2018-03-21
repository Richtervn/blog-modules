import _ from 'underscore';
import {connect} from 'react-redux';
import CharacterDetail from './CharacterDetail.component';

export default connect(({ds9799_user}) => ({
  character: _.findWhere(ds9799_user.characters, {Name: ds9799_user.focusCharacter})
}))(CharacterDetail)