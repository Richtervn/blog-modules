import _ from 'underscore';

export default (category, itemId, short) => {
  let excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6;
  if (_.contains(['Swords', 'Bows', 'Axes', 'Maces', 'Spears', 'Staffs', 'Pets'], category)) {
    excOpt1 = short ? 'Exc Dmg +10%' : 'Excellent Damage Rate +10%';
    excOpt2 = short ? 'Dmg +Lvl/20' : 'Increases Damage +Level/20';
    excOpt3 = short ? 'Dmg +2%' : 'Increases Damage +2%';
    excOpt4 = short ? 'Speed +7' : 'Increases Attacking(Wizardry) Speed +7';
    excOpt5 = short ? 'Life/8' : 'Increases Life After monster killed +Life/8';
    excOpt6 = short ? 'Mana/8' : 'Increases Mana After monster killed +Mana/8';
  }

  if (_.contains(['Armors', 'Boots', 'Gloves', 'Helms', 'Pants', 'Shields'], category)) {
    excOpt1 = short ? 'HP +4%' : 'Increase Max HP +4%';
    excOpt2 = short ? 'MP +4%' : 'Increase Max Mana +4%';
    excOpt3 = short ? 'Dmg -4%' : 'Damage Decrease +4%';
    excOpt4 = short ? 'Reflect +5%' : 'Reflect Damage +5%';
    excOpt5 = short ? 'Def Rate +10%' : 'Defense Success Rate +10%';
    excOpt6 = short ? 'Zen +40%' : 'Increases Zen After Monster Killed +40%';
  }

  if (_.contains(['Wings'], category)) {
    if (_.contains(['3', '4', '5', '6'], itemId)) {
      excOpt1 = short ? 'HP +125' : 'Life +125 Increased';
      excOpt2 = short ? 'MP +125' : 'Mana +125 Increased';
      excOpt3 = short ? 'Manaloss 10%' : '10% Mana Loss Instead of Life';
      excOpt4 = short ? '+50 Dmg HP' : '+50 of Damage Transfered as Life';
      excOpt5 = short ? 'Speed +5' : 'Increase Attacking(wizardry) Speed +5';
    }
  }
  return { excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6 };
};
