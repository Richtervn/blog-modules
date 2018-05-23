import React, { Component } from 'react';
import { InfoHeaderCard } from 'components/Cards';
import { formatNumber } from 'helpers';

class GameSettingCard extends Component {
  componentWillMount() {
    const { gameSetting, onGetGameSetting } = this.props;
    if (!gameSetting) {
      onGetGameSetting();
    }
  }
  render() {
    const { gameSetting } = this.props;
    if (!gameSetting) {
      return null;
    }
    return (
      <InfoHeaderCard key="pr_c" label="Promotions">
        <div>
          <strong>New account rewarded : </strong>
          {`${formatNumber(gameSetting.NEW_REGISTER_CREDIT)} Credits`}
        </div>
        <div>
          <strong>New account rewarded : </strong>
          {`${formatNumber(gameSetting.NEW_REGISTER_ZEN)} Zen`}
        </div>
      </InfoHeaderCard>
    );
  }
}

export default GameSettingCard;
