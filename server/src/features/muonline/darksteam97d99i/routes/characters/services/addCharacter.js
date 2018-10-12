import _ from 'underscore';

export default async (models, commonSequelize, body) => {
  const { AccountCharacter, Character } = models;
  const characterForm = { ...body };

  characterForm.IsVip == true ? '1' : '0';
  characterForm.IsMarried == true ? '1' : '0';

  const isNameExist = await commonSequelize.checkExist(Character, 'Name', body.Name);
  if (isNameExist) {
    return { message: 'Name has been taken' };
  }

  const accountCharacter = await AccountCharacter.findOne({ where: { Id: characterForm.AccountID } });
  const fields = ['GameID1', 'GameID2', 'GameID3', 'GameID4', 'GameID5'];
  let availableField;
  for (let i = 0; i < fields.length; i++) {
    if (!accountCharacter[fields[i]]) {
      availableField = fields[i];
      break;
    }
  }
  if (!availableField) {
    return { message: 'No more slot to create character in this account' };
  }
  await accountCharacter.update({ [availableField]: body.Name });
  const character = await Character.create(characterForm);
  return character;
};
