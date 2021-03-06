import _ from 'underscore';

export default async (Character, query, BASE_STATS) => {
  const options = {
    attributes: [
      'AccountID',
      'Name',
      'Class',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'LevelUpPoint'
    ]
  };

  if (query) {
    options.where = {};
    if (query.Class == 'ELF') {
      options.where.Class = { $in: ['32', '33'] };
    }
    if (query.Class == 'DK') {
      options.where.Class = { $in: ['16', '17'] };
    }
    if (query.Class == 'DW') {
      options.where.Class = { $in: ['0', '1'] };
    }
    if (query.Class == 'MG') {
      options.where.Class = '48';
    }
  }

  const characters = await Character.findAll(options);

  const baseStats = {};
  for (let charClass in BASE_STATS) {
    const { Strength, Dexterity, Vitality, Energy } = BASE_STATS[charClass];
    baseStats[charClass] = Strength + Dexterity + Vitality + Energy;
  }

  const result = characters.map(character => {
    const { Strength, Dexterity, Vitality, Energy, LevelUpPoint } = character.dataValues;
    const totalPoints =
      parseInt(Strength) + parseInt(Dexterity) + parseInt(Vitality) + parseInt(Energy) + parseInt(LevelUpPoint);

    let realPoints;
    if (_.contains(['32', '33'], character.Class.toString())) {
      realPoints = totalPoints - baseStats.ELF;
    }
    if (_.contains(['16', '17'], character.Class.toString())) {
      realPoints = totalPoints - baseStats.DK;
    }
    if (_.contains(['0', '1'], character.Class.toString())) {
      realPoints = totalPoints - baseStats.DW;
    }
    if (character.Class.toString() == '48') {
      realPoints = totalPoints - baseStats.MG;
    }

    character.dataValues.RealPoints = realPoints;

    return character;
  });
  const ranked = _.sortBy(result.map(char => char.dataValues), 'RealPoints').reverse();
  
  return ranked;
};
