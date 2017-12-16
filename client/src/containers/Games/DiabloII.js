import DiabloII from 'components/Games/DiabloII';
import { connect } from 'react-redux';

import {
  changeActiveChannel,
  setFocusMod,
  setFocusTool,
  setFocusSurvivalKit,
  setFocusCharacter,
  getCharacters,
  getMods,
  getTools,
  getSurvivalKits,
  editMod,
  editTool,
  editCharacter,
  editSurvivalKit,
  addMod,
  addTool,
  addCharacter,
  addSurvivalKit,
  deleteMod,
  deleteTool,
  deleteCharacter,
  deleteSurvivalKit
} from 'modules/Games/diabloII';

export default connect(
  ({ diabloII }) => ({
    mods: diabloII.mods,
    tools: diabloII.tools,
    survivalKits: diabloII.survivalKits,
    characters: diabloII.characters,
    versions: diabloII.versions,
    channels: diabloII.channels,
    activeChannel: diabloII.activeChannel,
    focusMod: diabloII.focusMod,
    focusTool: diabloII.focusTool,
    focusCharacter: diabloII.focusCharacter,
    focusSurvivalKit: diabloII.focusSurvivalKit
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetTools() {
      dispatch(getTools());
    },
    onGetSurvivalKits() {
      dispatch(getSurvivalKits());
    },
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onChangeActiveChannel(channel) {
      dispatch(changeActiveChannel(channel));
    },
    onAddMod(body) {
      dispatch(addMod(body));
    },
    onAddTool(body) {
      dispatch(addTool(body));
    },
    onAddCharacter(body) {
      dispatch(addCharacter(body));
    },
    onAddSurvivalKit(body) {
      dispatch(addSurvivalKit(body));
    },
    onEditMod(body) {
      dispatch(editMod(body));
    },
    onEditTool(body) {
      dispatch(editTool(body));
    },
    onEditSurvivalKit(body) {
      dispatch(editSurvivalKit(body));
    },
    onEditCharacter(body) {
      dispatch(editCharacter(body));
    },
    onDeleteMod(id) {
      dispatch(deleteMod(id));
    },
    onDeleteCharacter(id) {
      dispatch(deleteCharacter(id));
    },
    onDeleteSurvivalKit(id) {
      dispatch(deleteSurvivalKit(id));
    },
    onDeleteTool(id) {
      dispatch(deleteTool(id));
    }
  })
)(DiabloII);