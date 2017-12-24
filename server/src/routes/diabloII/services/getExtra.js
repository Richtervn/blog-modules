const extraDataPath = './src/routes/diabloII/data/extra.json';
const titles = ['No Title', 'Slayer', 'Champion', 'Patriarch'];

export default async (DiabloIICharacters, readFile) => {
  const result = {};

  const source = await readFile(extraDataPath);
  const extraData = JSON.parse(source.toString());

  const {
    AdditionLevelUpPoints,
    AdditionSkillPoints,
    SavedGold,
    LevelRatio,
    SkillRatio,
    Slayer,
    Champion,
    Patriarch,
    LevelUpPointsTier,
    SkillPointsTier1,
    SkillPointsTier2,
    SkillPointsTier3
  } = extraData;

  const characters = await DiabloIICharacters.find({ IsCount: true }, { Level: true, Title: true, _id: true });

  let allLevelUpPoints = 0;
  let allSkillPoints = 0;

  characters.forEach(character => {
    let baseLevelUpPoints = (character.Level - 1) * 5;
    let baseSkillPoints = character.Level - 1;
    for (let i = 0; i <= titles.length; i++) {
      if (character.Title == titles[i]) {
        baseLevelUpPoints += 5 * i;
        baseSkillPoints += 4 * i;
      }
    }
    allLevelUpPoints += baseLevelUpPoints;
    allSkillPoints += baseSkillPoints;
  });

  result.NextSkillPoints = Math.floor(allSkillPoints * SkillRatio) + AdditionSkillPoints;
  result.NextLevelUpPoints = Math.floor(allLevelUpPoints * LevelRatio) + AdditionLevelUpPoints;
  result.SavedGold = SavedGold;
  result.Slayer = Slayer;
  result.Champion = Champion;
  result.Patriarch = Patriarch;
  result.SkillRatio = SkillRatio;
  result.LevelRatio = LevelRatio;
  result.SkillPointsTier1 = SkillPointsTier1;
  result.SkillPointsTier2 = SkillPointsTier2;
  result.SkillPointsTier3 = SkillPointsTier3;
  result.LevelUpPointsTier = LevelUpPointsTier;

  return result;
};
