import './CharacterManager.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

import CharacterCard from '../../components/CharacterCard';
import CharacterDetail from './CharacterDetail.container';

class CharacterManager extends Component {
  componentWillMount() {
    const { onGetCharacters, userId, gameSetting, onGetGameSetting } = this.props;
    onGetCharacters(userId);
    if (!gameSetting) {
      onGetGameSetting();
    }
  }

  render() {
    const { characters, onSetFocusCharacter, focusCharacter, gameSetting } = this.props;
    if (!characters || !gameSetting) {
      return <ContainerLoader />;
    }
    const {
      ADD_POINT_FEE,
      RESET_KEEP_POINTS,
      RESET_MIN_LEVEL,
      RESET_MAX_LEVEL,
      RESET_LEVEL_GAP,
      FIRST_RESET_POINT,
      NEXT_4_RESET_POINT,
      RESET_AWARD_CREDITS,
      RESET_POINTS,
      RESET_FEE,
      QUEST_RESET_FEE,
      GRAND_RESET_POINTS,
      GRAND_RESET_REQUIRED,
      GRAND_RESET_AWARD_CREDITS,
      GRAND_RESET_FEE,
      CHANGE_NAME_FEE
    } = gameSetting;
    return (
      <div id="ds9799-character-manager">
        <div className="character-list">
          {characters.map((character, i) => (
            <CharacterCard
              key={character.Name}
              character={character}
              onClick={() => onSetFocusCharacter(character.Name)}
              isActive={character.Name === focusCharacter}
            />
          ))}
        </div>
        <div className="character-detail">
          <CharacterDetail />
        </div>
        <div className="rule-box">
          <div className="label">Price:</div>
          <ul>
            {ADD_POINT_FEE && (
              <li>
                Add point cost: <b>{ADD_POINT_FEE.toLocaleString()}</b> Zen per time.
              </li>
            )}
            {RESET_FEE && (
              <li>
                Reset cost: <b>{RESET_FEE.toLocaleString()}</b> Zen per time.
              </li>
            )}
            {QUEST_RESET_FEE && (
              <li>
                Quest reset cost: <b>{QUEST_RESET_FEE.toLocaleString()}</b> Zen per time.
              </li>
            )}
            {GRAND_RESET_FEE && (
              <li>
                Grand reset cost: <b>{GRAND_RESET_FEE.toLocaleString()}</b> Zen per time.
              </li>
            )}
            {CHANGE_NAME_FEE && (
              <li>
                Change name cost: <b>{CHANGE_NAME_FEE.toLocaleString()}</b> Zen per time.
              </li>
            )}
          </ul>
          <div className="label">Reset rules:</div>
          <ul>
            {RESET_KEEP_POINTS && <li>Reset will keep your points.</li>}
            {RESET_LEVEL_GAP && (
              <li>
                The required level to reset will increase by {RESET_LEVEL_GAP} each time you reset. First reset required
                level {RESET_MIN_LEVEL} and max level is {RESET_MAX_LEVEL}.
              </li>
            )}
            {!RESET_LEVEL_GAP && (
              <li>
                Reset will also reset your points to basic stats. First time reset you will receive extra{' '}
                {FIRST_RESET_POINT} points. And next 4 reset will receive {NEXT_4_RESET_POINT} points each. After that,
                you will only receive {RESET_POINTS} points each.
              </li>
            )}
            {RESET_AWARD_CREDITS && (
              <li>Each time you reset, you will be rewarded with {RESET_AWARD_CREDITS} credits.</li>
            )}
          </ul>
          <div className="label">Grand Reset rules:</div>
          <ul>
            <li>
              Grand reset will reset all your stats to basic with extra {GRAND_RESET_POINTS} points. Grand reset
              required {GRAND_RESET_REQUIRED.level ? `${GRAND_RESET_REQUIRED.Level} level and` : ''}{' '}
              {GRAND_RESET_REQUIRED.Resets} resets.
            </li>
            {GRAND_RESET_AWARD_CREDITS && (
              <li>Each time you grand reset, you will be rewarded with {GRAND_RESET_AWARD_CREDITS} credits.</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default CharacterManager;
