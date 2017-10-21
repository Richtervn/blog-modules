export default async (Character, query) => {
  const options = { where: { ...query } };
  options.attributes = [
    'AccountID',
    'Name',
    'cLevel',
    'LevelUpPoint',
    'Class',
    'Strength',
    'Dexterity',
    'Vitality',
    'Energy',
    'Money',
    'MapNumber',
    'MapPosX',
    'MapPosY',
    'CtlCode',
    'Resets',
    'GrandResets',
    'IsMarried',
    'MarryName',
    'QuestNumber',
    'QuestMonsters',
    'SkyEventWins',
    'IsVip',
    'VipExpirationTime'
  ];
  const characters = await Character.findAll(options);
  return characters;
};
