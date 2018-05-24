import './VipManager.css';
import _ from 'underscore';
import moment from 'moment';
import React, { Component } from 'react';
import CharacterCard from '../../components/CharacterCard';

import { ContainerLoader } from 'common/Loaders';
import { formatNumber } from 'helpers';

const VipStatus = ({ user, characters }) => {
  const data = [];
  if (!user.IsVip && user.IsVip.toString() !== '1') {
    data.push('Your account is not VIP');
  } else {
    data.push(`VIP account expiration time : ${moment.unix(user.VipExpirationTime).format('DD-MM-YYYY')}`);
  }
  const vipCharacters = characters.filter(character => _.contains(['1', 1, true, 'true'], character.IsVip));
  if (_.isEmpty(vipCharacters)) {
    data.push('Your characters are not VIPs');
  } else {
    vipCharacters.forEach(character =>
      data.push(
        `${character.Name}'s VIP status expiration time : ${moment.unix(character.VipExpirationTime).format('DD-MM-YYYY')}`
      )
    );
  }
  return <ul>{data.map((line, i) => <li key={i}>{line}</li>)}</ul>;
};

class VipManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeight: 0
    };
    this.isSetHeight = false;
  }

  componentWillMount() {
    const { characters, onGetCharacters, user, packages, onGetPackages } = this.props;
    if (!characters) {
      onGetCharacters(user.memb___id);
    }
    if (!packages) {
      onGetPackages();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const vipStatus = document.getElementsByClassName('vip-status')[0];
    if (vipStatus && !this.isSetHeight) {
      this.setState({ listHeight: window.innerHeight - vipStatus.clientHeight - 127 });
      this.isSetHeight = true;
    }
  }

  render() {
    const { onSetFocusCharacter, characters, focusCharacter, packages, user, onBuy } = this.props;
    const { listHeight } = this.state;

    if (!characters || !packages) {
      return <ContainerLoader />;
    }
    return (
      <div id="ds9799-vip-manager">
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
        <div className="vip-features">
          <div className="vip-status">
            <div className="label">Vip Status</div>
            <div className="content">
              <VipStatus user={user} characters={characters} />
            </div>
          </div>
          <div className="packages">
            <div className="packages-list" style={{ height: `${listHeight}px` }}>
              <div className="label">Character</div>
              <div className="content">
                {packages.filter(pack => pack.type === 'Character').map(pack => (
                  <div className="package-card" key={pack.id}>
                    <div className="label">{pack.name}</div>
                    <div className="buy">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() =>
                          onBuy({
                            packageId: pack.id,
                            userId: user.memb___id,
                            characterId: focusCharacter
                          })
                        }>
                        <div className="price">
                          <div className="prefix">Price :</div>
                          <div className="amount">&nbsp;{formatNumber(pack.price)}</div>
                          <div className="surfix">&nbsp;Credits</div>
                        </div>
                        <div className="slogan">BUY NOW</div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="packages-list" style={{ height: `${listHeight}px` }}>
              <div className="label">Account</div>
              <div className="content">
                {packages.filter(pack => pack.type === 'Account').map(pack => (
                  <div className="package-card" key={pack.id}>
                    <div className="label">{pack.name}</div>
                    <div className="buy">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() =>
                          onBuy({
                            packageId: pack.id,
                            userId: user.memb___id,
                            characterId: focusCharacter
                          })
                        }>
                        <div className="price">
                          <div className="prefix">Price :</div>
                          <div className="amount">&nbsp;{formatNumber(pack.price)}</div>
                          <div className="surfix">&nbsp;Credits</div>
                        </div>
                        <div className="slogan">BUY NOW</div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VipManager;
