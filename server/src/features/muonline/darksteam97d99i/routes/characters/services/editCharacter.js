import _ from 'underscore';

export default async (models, helpers, body) => {
  const { AccountCharacter, Character } = models;
  const { checkExist } = helpers;
  const updateForm = { ...body };
  updateForm.IsVip == true ? '1' : '0';
  updateForm.IsMarried == true ? '1' : '0';

  if (updateForm.Name) {
    const isNameExist = checkExist(Character, 'Name', updateForm.Name);
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
    const character = await Character.update(updateForm, { where: { Name: body.OldName } });
    return character;
  } else {
    const character = await Character.update(updateForm, { where: { Name: body.Name } });
    return character;
  }
};
