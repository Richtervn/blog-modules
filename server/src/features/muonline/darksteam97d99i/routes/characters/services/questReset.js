export default async (Character, Banking, query, appConfigs, methods) => {
  const { name, isUseBank } = query;
  const { payByBank, payByZen } = methods;

  const character = await Character.findOne({
    attributes: ['AccountID', 'Name', 'Quest', 'QuestNumber'],
    where: {
      Name: name
    }
  });

  let charged = false;
  const updateForm = {
    Quest: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    QuestNumber: 0
  };
  const resp = { isUseBank: isUseBank };

  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, appConfigs.GameSetting.GRAND_RESET_FEE);
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, appConfigs.GameSetting.GRAND_RESET_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  await character.update(updateForm);
  return resp;
};
