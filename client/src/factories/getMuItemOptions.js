import _ from 'underscore';

export default (category, itemId) => {
  let isHaveLuck = true;
  let isHaveSkill = true;
  if (_.contains(['Pets', 'Misc'], category)) {
    isHaveSkill = false;
    isHaveLuck = false;
  }
  if (_.contains(['Wings', 'Armors', 'Gloves', 'Boots', 'Pants', 'Helms'], category)) {
    isHaveSkill = false;
  }
  return { isHaveLuck, isHaveSkill };
};
