export default async (models, methods, GameSetting, query) => {
  const { name, isUseBank } = query;
  const { payByBank, payByZen } = methods;
  const { Character } = models

  const character = await Character.findOne({
    attributes: ['AccountID', 'Name', 'Quest', 'QuestNumber', 'Money', 'QuestMonsters'],
    where: { Name: name }
  });

  let charged = false;
  const updateForm = {
    Quest: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    QuestNumber: 0,
    QuestMonsters: 0
  };
  const resp = { isUseBank: isUseBank };

  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, GameSetting.QUEST_RESET_FEE, 'Quest reset');
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, GameSetting.QUEST_RESET_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  await character.update(updateForm);
  return resp;
};
