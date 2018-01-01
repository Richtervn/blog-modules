import React from 'react';
import TopNavBar from './TopNavBar';
import ToolsScreen from './ToolsScreen';
import ModsScreen from './ModsScreen';
import SurvivalKitsScreen from './SurvivalKitsScreen';
import CharactersScreen from './CharactersScreen';
import ExtraScreen from './ExtraScreen';

export default ({
  channels,
  versions,
  activeChannel,
  onChangeActiveChannel,
  mods,
  tools,
  characters,
  survivalKits,
  onGetMods,
  onGetModDetail,
  onGetCharacters,
  onGetTools,
  onGetToolDetail,
  onGetSurvivalKits,
  onEditMod,
  onEditCharacter,
  onEditSurvivalKit,
  onEditTool,
  onAddMod,
  onAddTool,
  onAddCharacter,
  onAddSurvivalKit,
  onDeleteMod,
  onDeleteTool,
  onDeleteCharacter,
  onDeleteSurvivalKit,
  focusMod,
  focusTool,
  focusCharacter,
  focusSurvivalKit,
  onSetFocusCharacter,
  onSetFocusSurvivalKit,
  addD2ModFormState,
  editD2ModFormState,
  addD2ToolFormState,
  editD2ToolFormState,
  addD2CharacterFormState,
  editD2CharacterFormState,
  addD2SurvivalKitFormState,
  editD2SurvivalKitFormState,
  extraData,
  onEditExtraData,
  onGetExtraData,
  onExtraSkill,
  onExtraGold,
  onExtraLevel
}) => (
  <div className="d2-main-screen">
    <div className="d2-screen-layout">
      <TopNavBar channels={channels} activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />
      <div className="d2-channel-screen">
        {activeChannel == 'Tools' && (
          <ToolsScreen
            versions={versions}
            tools={tools}
            focusTool={focusTool}
            onGetToolDetail={onGetToolDetail}
            onGetTools={onGetTools}
            onEditTool={onEditTool}
            onDeleteTool={onDeleteTool}
            onAddTool={onAddTool}
            addFormState={addD2ToolFormState}
            editFormState={editD2ToolFormState}
          />
        )}
        {activeChannel == 'Characters' && (
          <CharactersScreen
            mods={mods}
            onGetMods={onGetMods}
            characters={characters}
            onSetFocusCharacter={onSetFocusCharacter}
            onGetCharacters={onGetCharacters}
            focusCharacter={focusCharacter}
            onAddCharacter={onAddCharacter}
            onEditCharacter={onEditCharacter}
            onDeleteCharacter={onDeleteCharacter}
            addFormState={addD2CharacterFormState}
            editFormState={editD2CharacterFormState}
          />
        )}
        {activeChannel == 'Survival Kits' && (
          <SurvivalKitsScreen
            versions={versions}
            survivalKits={survivalKits}
            focusSurvivalKit={focusSurvivalKit}
            onSetFocusSurvivalKit={onSetFocusSurvivalKit}
            onGetSurvivalKits={onGetSurvivalKits}
            onEditSurvivalKit={onEditSurvivalKit}
            onDeleteSurvivalKit={onDeleteSurvivalKit}
            onAddSurvivalKit={onAddSurvivalKit}
            addFormState={addD2SurvivalKitFormState}
            editFormState={editD2SurvivalKitFormState}
          />
        )}
        {activeChannel == 'Mods' && (
          <ModsScreen
            versions={versions}
            mods={mods}
            focusMod={focusMod}
            onGetMods={onGetMods}
            onGetModDetail={onGetModDetail}
            onEditMod={onEditMod}
            onDeleteMod={onDeleteMod}
            onAddMod={onAddMod}
            addFormState={addD2ModFormState}
            editFormState={editD2ModFormState}
          />
        )}
        {activeChannel == 'Extra' && (
          <ExtraScreen
            data={extraData}
            onGetData={onGetExtraData}
            onExtraLevel={onExtraLevel}
            onExtraGold={onExtraGold}
            onExtraSkill={onExtraSkill}
            onEditData={onEditExtraData}
          />
        )}
      </div>
    </div>
  </div>
);
