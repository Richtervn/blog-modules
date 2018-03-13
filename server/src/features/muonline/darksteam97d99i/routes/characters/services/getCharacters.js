export default async (Character, query) => {
  const options = { where: {} };
  if (query.Name) options.where.Name = { $like: `%${query.Name}%` };
  if (query.AccountID) options.where.AccountID = { $like: `%${query.AccountID}` };
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
