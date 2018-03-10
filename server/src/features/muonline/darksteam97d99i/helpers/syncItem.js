import _ from 'underscore';
import Promise from 'bluebird';
import { Categories } from '../data/game';

export default async factories => {
  const { readFile, writeFile } = factories;
  const sourcePath = './src/features/muonline/darksteam97d99i/data/source';
  const dataPath = './src/features/muonline/darksteam97d99i/data/game';

  const sourceBuffer = await readFile(`${sourcePath}/item.txt`);
  const sourceData = sourceBuffer.toString();
  const rawGroups = sourceData.split('\nend');

  const groups = rawGroups
    .map(group => {
      const rawItems = group
        .split('\n')
        .filter(line => line.indexOf('//') == -1)
        .map(line =>
          line
            .replace(/\r/g, '')
            .replace(/\t/g, '  ')
            .trim()
        )
        .filter(Boolean);
      return rawItems;
    })
    .filter(group => group.length > 0);

  const data = {};
  groups.forEach(group => {
    const groupId = group.shift();
    data[groupId] = [];
    group.forEach(rawItem => {
      const attributes = rawItem
        .split('  ')
        .filter(Boolean)
        .map(attr => attr.trim());
      let item;
      if (_.contains(['0', '1', '2', '3', '4', '5'], groupId)) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          MinDmg: attributes[8],
          MaxDmg: attributes[9],
          Speed: attributes[10],
          Duration: attributes[11],
          MagicDuration: attributes[12],
          RequiredStrength: attributes[13],
          RequiredAgility: attributes[14],
          UseByDW_SM: attributes[15],
          UseByDK_BK: attributes[16],
          UseByElf_ME: attributes[17],
          UseByMG: attributes[18]
        };
      }

      if (groupId == '6') {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Defense: attributes[8],
          Duration: attributes[9],
          RequiredStrength: attributes[10],
          RequiredAgility: attributes[11],
          UseByDW_SM: attributes[12],
          UseByDK_BK: attributes[13],
          UseByElf_ME: attributes[14],
          UseByMG: attributes[15]
        };
      }

      if (_.contains(['7', '8', '9'], groupId)) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Defense: attributes[8],
          MagicDefense: attributes[9],
          Duration: attributes[10],
          RequiredStrength: attributes[11],
          RequiredAgility: attributes[12],
          UseByDW_SM: attributes[13],
          UseByDK_BK: attributes[14],
          UseByElf_ME: attributes[15],
          UseByMG: attributes[16]
        };
      }

      if (groupId == 10) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Defense: attributes[8],
          AttackSpeed: attributes[9],
          Duration: attributes[10],
          RequiredStrength: attributes[11],
          RequiredAgility: attributes[12],
          UseByDW_SM: attributes[13],
          UseByDK_BK: attributes[14],
          UseByElf_ME: attributes[15],
          UseByMG: attributes[16]
        };
      }

      if (groupId == 11) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Defense: attributes[8],
          WalkSpeed: attributes[9],
          Duration: attributes[10],
          RequiredStrength: attributes[11],
          RequiredAgility: attributes[12],
          UseByDW_SM: attributes[13],
          UseByDK_BK: attributes[14],
          UseByElf_ME: attributes[15],
          UseByMG: attributes[16]
        };
      }

      if (groupId == 12) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Defense: attributes[8],
          Duration: attributes[9],
          RequiredLevel: attributes[10],
          RequiredEnergy: attributes[11],
          RequiredStrength: attributes[12],
          RequiredAgility: attributes[13],
          Zen: attributes[14],
          UseByDW_SM: attributes[15],
          UseByDK_BK: attributes[16],
          UseByElf_ME: attributes[17],
          UseByMG: attributes[18]
        };
      }

      if (groupId == 13) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          Duration: attributes[8],
          IceResistance: attributes[9],
          PoisonResistance: attributes[10],
          LightResistance: attributes[11],
          FireResistance: attributes[12],
          UseByDW_SM: attributes[13],
          UseByDK_BK: attributes[14],
          UseByElf_ME: attributes[15],
          UseByMG: attributes[16]
        };
      }

      if (groupId == 14) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Value: attributes[7],
          Level: attributes[8]
        };
      }

      if (groupId == 15) {
        item = {
          _id: attributes[0],
          X: attributes[1],
          Y: attributes[2],
          Serial: attributes[3],
          Option: attributes[4],
          Drop: attributes[5],
          Name: attributes[6].replace(/"/g, '').trim(),
          Level: attributes[7],
          RequiredLevel: attributes[8],
          RequiredEnergy: attributes[9],
          Zen: attributes[10],
          UseByDW_SM: attributes[11],
          UseByDK_BK: attributes[12],
          UseByElf_ME: attributes[13],
          UseByMG: attributes[14]
        };
      }

      if (item) {
        data[groupId].push(item);
      }
    });
  });

  Object.keys(data).forEach(key => {
    Categories.forEach(async category => {
      if (category._id.toString() == key) {
        await writeFile(`${dataPath}/${category.Name}.json`, JSON.stringify(data[key], null, 2));
      }
    });
  });

  return;
};
