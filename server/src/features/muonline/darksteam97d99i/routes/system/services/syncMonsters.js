const dataPath = './src/features/muonline/darksteam97d99i/data/game';

export default async (readMuServerFile, writeFile) => {
  const monsters = [];
  const lines = await readMuServerFile('./src/features/muonline/darksteam97d99i/data/source/Monster.txt');
  lines.forEach(attributes => {
    const monster = {
      _id: attributes[0],
      isUsed: attributes[1],
      Name: attributes[2],
      Level: attributes[3],
      HP: attributes[4],
      MP: attributes[5],
      MinDmg: attributes[6],
      MaxDmg: attributes[7],
      Defense: attributes[8],
      MagicDefense: attributes[9],
      AttackRating: attributes[10],
      Block: attributes[11],
      MoveRange: attributes[12],
      AttribType: attributes[13],
      AttribRange: attributes[14],
      ViewRange: attributes[15],
      MoveSpeed: attributes[16],
      AttribSpeed: attributes[17],
      RegenTime: attributes[18],
      AttribRate: attributes[19],
      ItemRate: attributes[20],
      MoneyRate: attributes[21],
      MaxItems: attributes[22],
      ResWind: attributes[23],
      ResPoison: attributes[24],
      ResIce: attributes[25],
      ResWater: attributes[26],
      ResFire: attributes[27]
    };
    monsters.push(monster);
  });
  await writeFile(`${dataPath}/Monsters.json`, JSON.stringify(data, null, 2));
  return;
};
