const extraDataPath = './src/routes/diabloII/data/extra.json';
const titles = ['No Title', 'Slayer', 'Champion', 'Patriarch'];

export default async (Level, readFile, writeFile) => {
  const source = await readFile(extraDataPath);
  const extraData = JSON.parse(source.toString());

  const {
    AdditionLevelUpPoints,
    AdditionSkillPoints,
    LevelRatio,
    SkillRatio,
    Slayer,
    Champion,
    Patriarch,
    SkillPointsTier1,
    SkillPointsTier2,
    SkillPointsTier3,
    LevelUpPointsTier
  } = extraData;

  const getCharTile = charLevel => {
    if (charLevel > Patriarch) {
      return 'Patriarch';
    }
    if (charLevel > Champion) {
      return 'Champion';
    }
    if (charLevel > Slayer) {
      return 'Slayer';
    }
    return null;
  };

  const getRewardSkillPoints = charLevel => {
    if (charLevel > SkillPointsTier1) {
      return 1;
    }
    if (charLevel > SkillPointsTier2) {
      return 2;
    }
    if (charLevel > SkillPointsTier3) {
      return 4;
    }
    return 0;
  };

  const getRewardLevelUpPoints = charLevel => {
    if (charLevel > LevelUpPointsTier) {
      return 5;
    }
    return 0;
  };

  const charTitle = getCharTile(Level);
  let rewardLevelUpPoints = 0;
  let rewardSkillPoints = 0;

  if (charTitle) {
    for (let i = 0; i < titles.length; i++) {
      if (charTitle == titles[i]) {
        rewardLevelUpPoints = 5 * i;
        rewardSkillPoints = 5 * i;
        let remainLevel = Level - [title[i]];
        rewardSkillPoints += getRewardSkillPoints(remainLevel);
        rewardLevelUpPoints += getRewardLevelUpPoints(remainLevel);
      }
    }
  } else {
    rewardSkillPoints = getRewardSkillPoints(Level);
    rewardLevelUpPoints = getRewardLevelUpPoints(Level);
  }

  let allLevelUpPoints = (Level - 1) * 5 + rewardLevelUpPoints;
  let allSkillPoints = Level - 1 + rewardSkillPoints;

  extraData.AdditionLevelUpPoints += Math.floor(allLevelUpPoints * LevelRatio);
  extraData.AdditionSkillPoints += Math.floor(allSkillPoints * SkillRatio);

  await writeFile(extraDataPath, JSON.stringify(extraData, null, 2));

  return {
    LevelUpPoints: Math.floor(allLevelUpPoints * LevelRatio),
    SkillPoints: Math.floor(allSkillPoints * SkillRatio)
  };
};
