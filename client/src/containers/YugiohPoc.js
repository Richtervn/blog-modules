import YugiohPoc from 'components/Games/YugiohPoc';
import { connect } from 'react-redux';

import {
  submitYugiohModForm,
  submitYugiohDeckForm,
  submitEditYugiohModForm,
  submitEditYugiohDeckForm
} from 'modules/forms';

import {
  getModList,
  setFocusMod,
  getDeckList,
  setFocusDeck,
  changeTab,
  deleteMod,
  deleteDeck
} from 'modules/yugiohPoc';

export default connect(
  ({ forms, yugiohPoc }) => ({
    addModFormState: forms.AddYugiohMod,
    addDeckFormState: forms.AddYugiohDeck,
    editModForm: forms.EditYugiohMod,
    editDeckForm: forms.EditYugiohDeck,
    modList: yugiohPoc.modList,
    modFocus: yugiohPoc.modFocus,
    deckList: yugiohPoc.deckList,
    deckFocus: yugiohPoc.deckFocus,
    activeTab: yugiohPoc.viewControl.activeTab
  }),
  dispatch => ({
    onModSubmit(id, formBody) {
      dispatch(submitYugiohModForm(formBody));
    },
    onGetModList() {
      dispatch(getModList());
    },
    onSelectMod(mod) {
      dispatch(setFocusMod(mod));
      dispatch(getDeckList(mod._id));
    },
    onDeckSubmit(id, formBody) {
      dispatch(submitYugiohDeckForm(formBody));
    },
    onGetDeckList(modId) {
      dispatch(getDeckList(modId));
    },
    onSelectDeck(deck) {
      dispatch(setFocusDeck(deck));
    },
    onChangeTab(tab) {
      dispatch(changeTab(tab));
    },
    onEditModSubmit(id, formBody) {
      dispatch(submitEditYugiohModForm(formBody));
    },
    onEditDeckSubmit(id, formBody) {
      dispatch(submitEditYugiohDeckForm(formBody));
    },
    onDeleteMod(id, mod) {
      dispatch(deleteMod(id));
      dispatch(getDeckList(mod._id));
    },
    onDeleteDeck(id) {
      dispatch(deleteDeck(id));
    }
  })
)(YugiohPoc);
