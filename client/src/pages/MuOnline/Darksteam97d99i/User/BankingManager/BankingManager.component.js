import './BankingManager.css';
import React, { Component } from 'react';

import { ContainerLoader } from 'common/Loaders';
import CharacterCard from '../../components/CharacterCard';
import BankingFeature from './BankingFeature.container';
import BankingRule from './BankingRule.container';

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
    const { characters, gameSetting, focusCharacter, onSetFocusCharacter, banking } = this.props;

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
            <div className="label">{banking.memb___id}</div>
            <div className="content">
              <div className="row-wrapper">
                <div className="title-col">Zen Balance :</div>
                <div className="desc-col">
                  <b>{banking.zen_balance.toLocaleString()}</b> Zen
                </div>
              </div>
              <div className="row-wrapper">
                <div className="title-col">Loan :</div>
                <div className="desc-col">
                  <b>{banking.loan_money.toLocaleString()}</b> Zen
                </div>
              </div>
            </div>
          </div>
          <BankingRule />
        </div>
      </div>
    );
  }
}

export default BankingManager;
