import _ from 'underscore';

export default async (models, methods, GameSetting, query) => {
  const {
    RESET_KEEP_POINTS,
    GRAND_RESET_FEE,
    GRAND_RESET_POINTS,
    GRAND_RESET_REQUIRED,
    GRAND_RESET_AWARD_CREDITS,
    BASE_STATS,
    RESET_MIN_LEVEL,
    RESET_MAX_LEVEL,
    RESET_LEVEL_GAP,
    FIRST_RESET_POINT
  } = GameSetting;
  const { name, isUseBank } = query;
  const { Character, MembCredits } = models;
  const { payByBank, payByZen } = methods;

  const character = await Character.findOne({
    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'LevelUpPoint',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'Money'
    ],
    where: { Name: name }
  });

  if (character.cLevel < GRAND_RESET_REQUIRED.Level) {
    return { message: `${name} need ${GRAND_RESET_REQUIRED.Level} to perform Grand Reset` };
  }

  if (character.Resets < GRAND_RESET_REQUIRED.Resets) {
    return { message: `${name} need ${GRAND_RESET_REQUIRED.Resets} to perform Grand Reset` };
  }

  let resp = { Resets: character.Resets - 20, GrandResets: character.GrandResets + 1 };

  let updateForm = {
    Resets: character.Resets - GRAND_RESET_REQUIRED.Resets,
    cLevel: 1,
    GrandResets: character.GrandResets + 1
  };

  let charged;
  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, RESET_FEE, 'Grand reset');
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, RESET_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  if (_.contains([0, 1], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.DW };
  if (_.contains([16, 17], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.DK };
  if (_.contains([32, 33], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.ELF };
  if (_.contains([48], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.MG };

  let remainReset = character.Resets - 20;
  if (RESET_KEEP_POINTS) {
    let totalLevel;
    let minTotalLevel = remainReset * RESET_MIN_LEVEL;
    let resetWithGap = (RESET_MAX_LEVEL - RESET_MIN_LEVEL) / RESET_LEVEL_GAP;
    if (remainReset < resetWithGap) {
      totalLevel = minTotalLevel + RESET_LEVEL_GAP * remainReset;
    } else {
      totalLevel = minTotalLevel + RESET_LEVEL_GAP * remainReset + (remainReset - resetWithGap) * RESET_MAX_LEVEL;
    }
    updateForm.LevelUpPoint = character.Class == 48 ? totalLevel * 7 : totalLevel * 5;
  } else {
    let resetPoints = 0;
    if (remainReset > 0) {
      resetPoints = FIRST_RESET_POINT;
    }
    if (remainReset > 0 && remainReset < 5) {
      resetPoints += character.Resets * NEXT_4_RESET_POINT;
    }
    if (remainReset >= 5) {
      resetPoints += 4 * NEXT_4_RESET_POINT;
      resetPoints += (character.Resets - 4) * RESET_POINTS;
    }
    resetPoints += (character.GrandResets + 1) * GRAND_RESET_POINTS;
    updateForm.LevelUpPoint = resetPoints;
  }

  if (GRAND_RESET_AWARD_CREDITS) {
    const membCredit = await MembCredits.findOne({
      memb___id: character.AccountID
    });
    const totalCredits = membCredit.credits + GRAND_RESET_AWARD_CREDITS;
    [
      await membCredit.update({ credits: totalCredits }),
      await UserCreditsLog.create({
        memb___id: character.AccountID,
        description: `${character.Name} reset reward`,
        type: 'add',
        credits: GRAND_RESET_AWARD_CREDITS
      })
    ];
    resp.credits = totalCredits;
  }

  await character.update(updateForm);
  resp = { ...resp, ...updateForm };

  return resp;
};
