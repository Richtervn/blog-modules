import React from 'react';
import RuleBoard from './RuleBoard';
import InfoBoard from './InfoBoard';
import ExtraBoard from './ExtraBoard';
import RuleEditBoard from './RuleEditBoard';
import RatioBoard from './RatioBoard';

export default ({ data, onGetData, onExtraLevel, onExtraGold, onExtraSkill, onEditData }) => {
  if (!data) {
    onGetData();
    return null;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-6 no-col-margin">
        <InfoBoard data={data} />
        <ExtraBoard onExtraSkill={onExtraSkill} onExtraGold={onExtraGold} onExtraLevel={onExtraLevel} />
        <RatioBoard data={data} onEditRatio={onEditData} />
      </div>
      <div className="col-6 no-col-margin">
        <RuleBoard data={data} />
        <RuleEditBoard data={data} onEditRule={onEditData} />
      </div>
    </div>
  );
};
