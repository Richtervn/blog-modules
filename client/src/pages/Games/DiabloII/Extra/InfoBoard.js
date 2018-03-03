import React from 'react';
import { formatNumber } from 'helpers';

export default ({ data }) => (
  <div className="d2-extra-board" id="d2e-info">
    <h5 className="text-center">
      <b>Next character will recieve :</b>
    </h5>
    <div className="info">
      <h5>
        <span className="point">{data.NextLevelUpPoints}</span>&nbsp;Level Up Points
      </h5>
      <h5>
        <span className="point">{data.NextSkillPoints}</span>&nbsp;Skill Points
      </h5>
      <h5>
        You have saved :&nbsp;<span className="gold">{formatNumber(data.SavedGold)}</span>&nbsp;Gold
      </h5>
    </div>
  </div>
);

