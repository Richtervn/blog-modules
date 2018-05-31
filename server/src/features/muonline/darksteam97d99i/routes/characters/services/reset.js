import _ from 'underscore';

export default async (models, methods, GameSetting, query) => {
  const {
    RESET_KEEP_POINTS,
    RESET_MIN_LEVEL,
    RESET_MAX_LEVEL,
    FIRST_RESET_POINT,
    NEXT_4_RESET_POINT,
    RESET_POINTS,
    RESET_AWARD_CREDITS,
    RESET_FEE,
    RESET_LEVEL_GAP,
    BASE_STATS,
    GRAND_RESET_POINTS
  } = GameSetting;
  const { Character, MembCredits } = models;
  const { name, isUseBank } = query;
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

  let updateForm = { cLevel: 1, Resets: character.Resets + 1 };
  let resp = { Resets: character.Resets + 1 };

  let requireLevel = RESET_MIN_LEVEL + character.Resets * RESET_LEVEL_GAP;
  if (requireLevel > RESET_MAX_LEVEL) requireLevel = RESET_MAX_LEVEL;

  if (character.cLevel < requireLevel) {
    return { message: `${name} need level ${requireLevel} to reset` };
  }

  let charged;
  if (isUseBank == 'true') {
    charged = await payByBank(character.AccountID, RESET_FEE, 'Reset');
    if (charged.message) return charged;
    resp.zen_balance = charged.zen_balance;
  } else {
    charged = payByZen(character, RESET_FEE);
    if (charged.message) return charged;
    updateForm.Money = charged.Money;
    resp.Money = charged.Money;
  }

  if (!RESET_KEEP_POINTS) {
    if (_.contains([0, 1], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.DW };
    if (_.contains([16, 17], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.DK };
    if (_.contains([32, 33], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.ELF };
    if (_.contains([48], character.Class)) updateForm = { ...updateForm, ...BASE_STATS.MG };

    let resetPoints = FIRST_RESET_POINT;
    if (character.Resets > 0 && character.Resets < 5) {
      resetPoints += character.Resets * NEXT_4_RESET_POINT;
    }
    if (character.Resets >= 5) {
      resetPoints += 4 * NEXT_4_RESET_POINT;
      resetPoints += (character.Resets - 4) * RESET_POINTS;
    }
    if (character.GrandResets > 0) {
      resetPoints += character.GrandResets * GRAND_RESET_POINTS;
    }

    updateForm.LevelUpPoint = resetPoints;
  }

  if (RESET_AWARD_CREDITS) {
    const membCredit = await MembCredits.findOne({
      memb___id: character.AccountID
    });
    const totalCredits = membCredit.credits + RESET_AWARD_CREDITS;
    membCredit.update({ credits: totalCredits });
    resp.credits = totalCredits;
  }

  await character.update(updateForm);
  resp = { ...resp, ...updateForm };

  return resp;
};
