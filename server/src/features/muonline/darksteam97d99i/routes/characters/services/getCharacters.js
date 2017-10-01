export default async (Character, id) => {
  const characters = await Character.findAll({
    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'LevelUpPoint',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'PkCount',
      'PkLevel',
      'Money'
    ],
    where: {
      AccountID: id
    }
  });
  return characters;
};