export default async (models, methods, GameSetting, body) => {
  const { CHANGE_NAME_FEE } = GameSetting;
  const { Character, AccountCharacter } = models;
  const { payByBank, payByZen } = methods;
  const { oldName, newName, isUseBank } = body;
  const resp = {};

  const character = await Character.findOne({ attributes: ['Name'], where: { Name: oldName } });

  let charged;
  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, CHANGE_NAME_FEE, 'Change name');
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, CHANGE_NAME_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  let oldNameKey;
  const accountCharacter = await AccountCharacter.findOne({ where: { Id: character.AccountID } });
  for (let key in accountCharacter) {
    if (accountCharacter[key] === oldName) {
      oldNameKey = key;
      break;
    }
  }

  [await character.update({ Name: newName }), await accountCharacter.update({ [oldNameKey]: newName })];

  return resp;
};
