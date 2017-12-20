import DiabloII from 'components/Games/DiabloII';
import { connect } from 'react-redux';

import {
  changeActiveChannel,
  setFocusSurvivalKit,
  setFocusCharacter,
  getCharacters,
  getMods,
  getModDetail,
  getTools,
  getToolDetail,
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
  ({ diabloII, forms }) => ({
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
    focusSurvivalKit: diabloII.focusSurvivalKit,
    addD2ModFormState: forms.AddD2Mod,
    editD2ModFormState: forms.EditD2Mod,
    addD2ToolFormState: forms.AddD2Tool,
    editD2ToolFormState: forms.EditD2Tool,
    addD2SurvivalKitFormState: forms.AddD2SurvivalKit,
    editD2SurvivalKitFormState: forms.EditD2SurvivalKit,
    addD2CharacterFormState: forms.AddD2Character,
    editD2CharacterFormState: forms.EditD2Character
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetModDetail(id) {
      dispatch(getModDetail(id));
    },
    onGetTools() {
      dispatch(getTools());
    },
    onGetToolDetail(id){
      dispatch(getToolDetail(id));
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
    },
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onSetFocusSurvivalKit(kit) {
      dispatch(setFocusSurvivalKit(kit));
    }
  })
)(DiabloII);
