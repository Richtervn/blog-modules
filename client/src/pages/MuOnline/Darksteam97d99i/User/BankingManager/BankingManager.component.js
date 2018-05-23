import './BankingManager.css';
import React, { Component } from 'react';
import { formatNumber } from 'helpers';

import { ContainerLoader } from 'common/Loaders';
import CharacterCard from '../../components/CharacterCard';
import BankingFeature from './BankingFeature.container';
import BankingRule from './BankingRule.container';
import BankingLogs from './BankingLogs.container';

class BankingManager extends Component {
  componentWillMount() {
    const { characters, onGetCharacters, userId, gameSetting, onGetGameSetting } = this.props;
    if (!characters) {
      onGetCharacters(userId);
    }
    if (!gameSetting) {
      onGetGameSetting();
    }
  }

  render() {
    const {
      userId,
      characters,
      gameSetting,
      focusCharacter,
      onSetFocusCharacter,
      zen_balance,
      loan_money
    } = this.props;

    if (!characters || !gameSetting) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-banking-manager">
        <div className="characters-list">
          {characters.map((character, i) => (
            <CharacterCard
              key={character.Name}
              character={character}
              onClick={() => onSetFocusCharacter(character.Name)}
              isActive={character.Name === focusCharacter}
            />
          ))}
        </div>
        <BankingFeature />
        <div className="side-col">
          <div className="banking-card">
            <div className="label">{userId}</div>
            <div className="content">
              <div className="row-wrapper">
                <div className="title-col">Zen Balance :</div>
                <div className="desc-col">
                  <b>{formatNumber(zen_balance)}</b> Zen
                </div>
              </div>
              <div className="row-wrapper">
                <div className="title-col">Loan :</div>
                <div className="desc-col">
                  <b>{formatNumber(loan_money)}</b> Zen
                </div>
              </div>
            </div>
          </div>
          <BankingRule />
          <div className="logs">
            <BankingLogs maxTableHeight={291}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BankingManager;
