export default async (models, name) => {
  const { Character, AccountCharacter } = models;

  const character = await Character.findOne({ where: { Name: name }, attributes: ['Name', 'AccountID'] });
  const accountCharacter = await AccountCharacter.findOne({ where: { Id: character.AccountID } });

  const fields = ['GameID1', 'GameID2', 'GameID3', 'GameID4', 'GameID5'];
  let currentField;
  for (let i = 0; i < fields.length; i++) {
    if (accountCharacter[fields[i]] == character.Name) {
      currentField = fields[i];
      break;
    }
  }

  await accountCharacter.update({ [currentField]: '' });
  await Character.destroy({ where: { Name: name } });
  return { id: name };
};
