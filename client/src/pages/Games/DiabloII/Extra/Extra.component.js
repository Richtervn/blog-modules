import './Extra.css';
import React, { Component } from 'react';
import { PageLoader } from 'common/Loaders';

import InfoBoard from './InfoBoard';
import ExtraBoard from './ExtraBoard';
import RatioBoard from './RatioBoard';

import RuleBoard from './RuleBoard';
import RuleEditBoard from './RuleEditBoard';

class Extra extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }

  render() {
    const { data, onExtraLevel, onExtraGold, onExtraSkill, onEditData } = this.props;
    if (!data) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <InfoBoard data={data} />
            <ExtraBoard onExtraSkill={onExtraSkill} onExtraGold={onExtraGold} onExtraLevel={onExtraLevel} />
            <RatioBoard data={data} onEditData={onEditData}/>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <RuleBoard data={data} />
            <RuleEditBoard data={data} onEditData={onEditData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Extra;
