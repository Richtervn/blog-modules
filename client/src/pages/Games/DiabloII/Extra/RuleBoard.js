import React from 'react';

const getRules = gameData => {
  const rules = [];
  rules.push(`The current reset ratio for stats points is ${gameData.LevelRatio}.`);
  rules.push(`The current reset ratio for skill points is ${gameData.SkillRatio}.`);
  rules.push(`Character with higher level than ${gameData.Slayer} will have title Slayer.`);
  rules.push(`Character with higher level than ${gameData.Champion} will have title Champion.`);
  rules.push(`Character with higher level than ${gameData.Patriarch} will have title Patriarch.`);
  rules.push(`Character with higher level than his title will also be calculated like below.`);
  rules.push(`Character with higher level than ${gameData.LevelUpPointsTier} will receive addition 5 stats points.`);
  rules.push(`Character with higher level than ${gameData.SkillPointsTier3} will receive addition 4 skill points.`);
  rules.push(`Character with higher level than ${gameData.SkillPointsTier2} will receive addition 2 skill points.`);
  rules.push(`Character with higher level than ${gameData.SkillPointsTier1} will receive addition 1 skill points.`);
  return rules;
};

export default ({ data }) => (
  <div className="d2-extra-board" id="d2e-rule">
    <div className="text-center">
      <h5>Saving characters will increase next created characters' stats</h5>
      <div className="subtitle">Extra levels from non-saved character will be calculated by the following rules :</div>
    </div>
    <ul>{getRules(data).map((rule, i) => <li key={i}>{rule}</li>)}</ul>
  </div>
);
