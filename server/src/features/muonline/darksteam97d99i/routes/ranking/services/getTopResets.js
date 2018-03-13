import _ from 'underscore';

export default async (Character, query, GRAND_RESET_REQUIRED) => {
  const options = {
    attributes: ['AccountID', 'Name', 'Class', 'Strength', 'Dexterity', 'Vitality', 'Energy', 'Resets', 'GrandResets']
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
  const result = characters.map(character => {
    const totalResets = character.Resets + (character.GrandResets * GRAND_RESET_REQUIRED.Resets);
    character.TotalResets = totalResets;
    return character;
  });

  return _.sortBy(result, 'TotalResets').reverse();
};
