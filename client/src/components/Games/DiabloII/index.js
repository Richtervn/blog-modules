import React from 'react';
import TopNavBar from './TopNavBar';
import ToolsScreen from './ToolsScreen';
import ModsScreen from './ModsScreen';
import SurvivalKitsScreen from './SurvivalKitsScreen';
import CharactersScreen from './CharactersScreen';

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
  onGetCharacters,
  onGetTools,
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
  onSetFocusMod,
  onSetFocusTool,
  onSetFocusCharacter,
  onSetFocusSurvivalKit
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
            onSetFocusTool={onSetFocusTool}
            onGetTools={onGetTools}
            onEditTool={onEditTool}
            onDeleteTool={onDeleteTool}
            onAddTool={onAddTool}
          />
        )}
        {activeChannel == 'Characters' && (
          <CharactersScreen
            versions={versions}
            characters={characters}
            onSetFocusCharacter={onSetFocusCharacter}
            onGetCharacters={onGetCharacters}
            focusCharacter={focusCharacter}
            onAddCharacter={onAddCharacter}
            onEditCharacter={onEditCharacter}
            onDeleteCharacter={onDeleteCharacter}
          />
        )}
        {activeChannel == 'Survial Kits' && (
          <SurvivalKitsScreen
            versions={versions}
            survivalKits={survivalKits}
            focusSurvivalKit={focusSurvivalKit}
            onSetFocusSurvivalKit={onSetFocusSurvivalKit}
            onGetSurvivalKits={onGetSurvivalKits}
            onEditSurvivalKit={onEditSurvivalKit}
            onDeleteSurvivalKit={onDeleteSurvivalKit}
            onAddSurvivalKit={onAddSurvivalKit}
          />
        )}
        {activeChannel == 'Mods' && (
          <ModsScreen
            versions={versions}
            mods={mods}
            focusMod={focusMod}
            onGetMods={onGetMods}
            onSetFocusMod={onSetFocusMod}
            onEditMod={onEditMod}
            onDeleteMod={onDeleteMod}
            onAddMod={onAddMod}
          />
        )}
      </div>
    </div>
  </div>
);
