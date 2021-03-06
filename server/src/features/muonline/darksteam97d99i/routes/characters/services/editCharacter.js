import _ from 'underscore';

export default async (models, commonSequelize, body) => {
  const { AccountCharacter, Character } = models;
  const updateForm = { ...body };
  updateForm.IsVip == true ? '1' : '0';
  updateForm.IsMarried == true ? '1' : '0';

  const character = await Character.findOne({ where: { Name: updateForm.Name } });

  if (updateForm.Name !== character.Name) {
    const isNameExist = commonSequelize.checkExist(Character, 'Name', updateForm.Name);
    if (isNameExist) {
      return { message: 'Name has been taken' };
    }
    const accountCharacter = await AccountCharacter.findOne({ where: { Id: updateForm.AccountID } });
    const fields = ['GameID1', 'GameID2', 'GameID3', 'GameID4', 'GameID5'];
    let currentField;
    for (let i = 0; i < fields.length; i++) {
      if (accountCharacter[fields[i]] == updateForm.OldName) {
        currentField = fields[i];
        break;
      }
    }
    await accountCharacter.update({ [currentField]: updateForm.Name });
    delete updateForm.OldName;
    const result = await Character.update(updateForm, { where: { Name: body.OldName } });
    return result;
  } else {
    const result = await Character.update(updateForm, { where: { Name: body.Name } });
    return result;
  }
};
