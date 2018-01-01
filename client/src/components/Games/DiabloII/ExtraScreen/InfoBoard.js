import React from 'react';
import formatNumber from 'factories/formatNumber';

export default ({ data }) => (
  <div className="d2-extra-info-board">
    <h5 className="text-center">Next character will recieve :</h5>
    <div style={{paddingLeft: '33%', 'paddingTop' : '20px', 'paddingBottom': '20px'}}>
      <h5>
        <span style={{color: '#00cc00'}}>{data.NextLevelUpPoints}</span>&nbsp;Level Up Points
      </h5>
      <h5>
        <span style={{color: '#00cc00'}}>{data.NextSkillPoints}</span>&nbsp;Skill Points
      </h5>
      <h5>
        You have saved :&nbsp;<span style={{color: '#ffc107'}}>{formatNumber(data.SavedGold)}</span>&nbsp;Gold
      </h5>
    </div>
  </div>
);
