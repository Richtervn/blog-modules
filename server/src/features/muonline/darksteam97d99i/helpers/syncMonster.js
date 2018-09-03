import _ from 'underscore';
import Promise from 'bluebird';
import { Categories } from '../data/game';

export default async factories => {
  const { readFile, writeFile } = factories;
  const data = [];
  const sourcePath = './src/features/muonline/darksteam97d99i/data/source';
  const dataPath = './src/features/muonline/darksteam97d99i/data/game';

  const sourceBuffer = await readFile(`${sourcePath}/Monster.txt`);
  const sourceData = sourceBuffer.toString();

  const rawMonsters = sourceData.split('\n').filter(line => line.indexOf('//') == -1);
  rawMonsters.forEach(line => {
    const nameStart = line.indexOf('"');
    if (nameStart == -1) {
      return;
    }
    const nameEnd = line.indexOf('"', nameStart + 1);
    const name = line.slice(nameStart + 1, nameEnd);
    const lineWithoutName = line.replace(`"${name}"`, '').trim();

    const refinedLine = lineWithoutName.replace(/\t/g, ' ');
    const attributes = refinedLine.split(' ').filter(attr => attr);
    const monster = {
      _id: attributes[0],
      isUsed: attributes[1],
      Name: name,
      Level: attributes[2],
      HP: attributes[3],
      MP: attributes[4],
      MinDmg: attributes[5],
      MaxDmg: attributes[6],
      Defense: attributes[7],
      MagicDefense: attributes[8],
      AttackRating: attributes[9],
      Block: attributes[10],
      MoveRange: attributes[11],
      AttribType: attributes[12],
      AttribRange: attributes[13],
      ViewRange: attributes[14],
      MoveSpeed: attributes[15],
      AttribSpeed: attributes[16],
      RegenTime: attributes[17],
      AttribRate: attributes[18],
      ItemRate: attributes[19],
      MoneyRate: attributes[20],
      MaxItems: attributes[21],
      ResWind: attributes[22],
      ResPoison: attributes[23],
      ResIce: attributes[24],
      ResWater: attributes[25],
      ResFire: attributes[26]
    };
    data.push(monster);
  });

  await writeFile(`${dataPath}/Monsters.json`, JSON.stringify(data, null, 2));
  return;
};
