import './TradeDs9799Exchange.css';
import React, { Component } from 'react';
import { ModalHeader } from 'components/Modal';
import { CharacterCard } from '../../../components';
import { ModalLoader } from 'common/Loaders';

class TradeExchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusCharacter: '',
      value: this.initStateValue(this.props.characters)
    };
  }

  initStateValue(characters) {
    const defaultValue = {};
    if (!characters) {
      return defaultValue;
    }
    if (characters) {
      characters.forEach(character => {
        defaultValue[character.Name] = 0;
      });
    }
    return defaultValue;
  }

  componentWillMount() {
    const { characters, onGetCharacters, userId } = this.props;
    if (!characters) {
      onGetCharacters(userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.characters && nextProps.characters) {
      this.setState({ value: this.initStateValue(nextProps.characters) });
    }
  }

  handleChange(e) {
    const { exchangeCount } = this.props;
    const { name, value } = e.target;
    const nextState = this.state;
    if (value > exchangeCount[name]) {
      nextState.value[name] = exchangeCount[name];
    } else {
      nextState.value[name] = value;
    }
    this.setState(nextState);
  }

  handleTradeExchange(type, characterName) {
    const { onTradeExchange, userId, exchange } = this.props;
    if (type === 'single') {
      const query = {
        type,
        characterName,
        exchangeId: exchange.id,
        count: this.state.value[characterName],
        memb___id: userId
      };
      onTradeExchange(query);
    }
    if (type === 'all') {
      onTradeExchange({ type, exchangeId: exchange.id, memb___id: userId });
    }
  }

  render() {
    const { exchange, characters, exchangeCount } = this.props;

    return [
      <ModalHeader iconUrl="/images/icons/mulogo.png" label={exchange.name} key="te_h" />,
      <div id="ds9799-trade-exchange" className="modal-body" key="te_b">
        {!characters && <ModalLoader />}
        {characters && (
          <div className="character-list">
            {characters.map(character => (
              <CharacterCard
                key={character.Name}
                nameOnly
                character={character}
                isActive={character.Name === this.state.focusCharacter}
                onClick={() => this.setState({ focusCharacter: character.Name })}>
                <div className="exchange-count">
                  <strong>
                    {exchangeCount[character.Name]} {exchange.name}
                  </strong>
                </div>
                <div className="exchange-form">
                  <input
                    className="form-control"
                    value={this.state.value[character.Name]}
                    onChange={e => this.handleChange(e)}
                    name={character.Name}
                    type="number"
                    disabled={exchangeCount[character.Name] < 1}
                  />
                  <button
                    className="btn btn-danger"
                    disabled={exchangeCount[character.Name] < 1}
                    onClick={() => this.handleTradeExchange('single', character.Name)}>
                    Exchange
                  </button>
                </div>
              </CharacterCard>
            ))}
          </div>
        )}
        {characters && (
          <div className="all-btn">
            <button
              className="btn btn-danger btn-block"
              onClick={() => this.handleTradeExchange('all')}
              disabled={exchangeCount.total < 1}>
              Exchange all {exchangeCount.total} {exchange.name}
            </button>
          </div>
        )}
      </div>
    ];
  }
}

export default TradeExchange;
