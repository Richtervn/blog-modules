export default async (models, methods, GameSetting, query) => {
  const { name, point, type, isUseBank } = query;
  const { payByBank, payByZen } = methods;
  const { Character } = models;

  const character = await Character.findOne({
    attributes: ['AccountID', 'Name', 'Dexterity', 'Strength', 'Vitality', 'Energy', 'LevelUpPoint', 'Money'],
    where: { Name: name }
  });

  if (character.LevelUpPoint < point) {
    return { message: 'Character do not have enough points' };
  }

  let charged = false;
  const updateForm = {
    [type]: character[type] + parseInt(point),
    LevelUpPoint: character.LevelUpPoint - point
  };
  const resp = { LevelUpPoint: character.LevelUpPoint - point, isUseBank: isUseBank, type: type };

  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, GameSetting.ADD_POINT_FEE);
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, GameSetting.ADD_POINT_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  const result = await character.update(updateForm);
  resp[type] = result[type];

  return resp;
};
