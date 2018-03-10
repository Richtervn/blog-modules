import _ from 'underscore';
import Promise from 'bluebird';
import { Categories } from '../../../data';

export default async factories => {
  const { readFile, writeFile } = factories;
  const sourcePath = './src/features/muonline/darksteam97d99i/sourceData';
  const dataPath = './src/features/muonline/darksteam97d99i/data';

  const sourceBuffer = await readFile(`${sourcePath}/Monster.txt`);
  const sourceData = sourceBuffer.toString();

  const rawMonsters = sourceData.split('\n').filter(line => line.indexOf('//') == -1);
  const monsters = rawMonsters.map(line => line.replace(/\t/g, '  ').split('  '));

  const data = [];
  monsters.filter(rawAttributes => rawAttributes.length > 1).forEach(rawAttributes => {
    const attributes = rawAttributes.map(rawAttribute => rawAttribute.trim());
    const monster = {
      _id: attributes[0],
      isUsed: attributes[1],
      Name: attributes[2].replace(/"/g, ''),
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
      AttackType: attributes[13],
      ViewRadius: attributes[14],
      MoveSpeed: attributes[15],
      AttackSpeed: attributes[16],
      RegenTime: attributes[17],
      Attribute: attributes[18],
      Item: attributes[19],
      Money: attributes[20],
      ItemLevel: attributes[21],
      Skill: attributes[22]
    };
    if (monster) {
      data.push(monster);
    }
  });
  await writeFile(`${dataPath}/Monsters.json`, JSON.stringify(data, null, 2));
  return;
};
