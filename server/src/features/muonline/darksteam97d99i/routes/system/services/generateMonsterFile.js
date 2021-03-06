const order = [
  '_id',
  'isUsed',
  'Name',
  'Level',
  'HP',
  'MP',
  'MinDmg',
  'MaxDmg',
  'Defense',
  'MagicDefense',
  'AttackRating',
  'Block',
  'MoveRange',
  'AttribType',
  'AttribRange',
  'ViewRange',
  'MoveSpeed',
  'AttribSpeed',
  'RegenTime',
  'AttribRate',
  'ItemRate',
  'MoneyRate',
  'MaxItems',
  'ResWind',
  'ResPoison',
  'ResIce',
  'ResWater',
  'ResFire'
];

const aliasFields = {
  _id: 'Index'
};

export default async (getGameData, writeFile, pad) => {
  let longDivider = '// ';
  longDivider = pad(longDivider, '-', 316, '');

  const fileHeader = '// Generated By VuPham\n';

  let fileContent = '';
  fileContent += `${fileHeader}\n`;

  const monsters = await getGameData('Monsters');

  let maxNameLength = 0;
  monsters.map(monster => {
    if (monster.Name.length > maxNameLength) {
      maxNameLength = monster.Name.length;
    }
  });

  let colDescription = '// ';
  order.forEach((field, i) => {
    const prevKey = order[i - 1];
    if (prevKey && prevKey == 'Name') {
      colDescription = pad(colDescription, ' ', colDescription.length + maxNameLength + 1, `[${field}]`);
    } else if (prevKey && prevKey == 'Zen') {
      colDescription = pad(colDescription, ' ', colDescription.length + 14, `[${aliasFields[field] || field}]`);
    } else if (prevKey) {
      colDescription += ` [${aliasFields[field] || field}]`;
    } else {
      colDescription += `[${aliasFields[field] || field}]`;
    }
  });

  let collumnHeader = [longDivider, colDescription, longDivider].join('\n');
  fileContent += `${collumnHeader}\n`;

  monsters.forEach(monster => {
    let monsterLine = '   ';

    order.forEach((field, i) => {
      const passedKeys = order.slice(0).filter((__, j) => j <= i);

      let indentLength = 3;
      passedKeys.forEach((col, n) => {
        let prevKey;
        if (passedKeys[n - 1]) {
          prevKey = aliasFields[passedKeys[n - 1]] ? aliasFields[passedKeys[n - 1]] : passedKeys[n - 1];
        }
        if (prevKey === 'Name') {
          indentLength += maxNameLength;
          indentLength += `[${prevKey}]`.length + 1;
        } else if (prevKey === 'Zen') {
          indentLength += 14;
          indentLength += `[${prevKey}]`.length + 1;
        } else if (prevKey) {
          indentLength += `[${prevKey}]`.length + 1;
        } else {
          indentLength++;
        }
      });

      let value = monster[field];
      if (field === 'Name') {
        value = `"${monster[field]}"`;
      }

      monsterLine = pad(monsterLine, ' ', indentLength, value);
    });
    fileContent += monsterLine + '\n';
  });

  fileContent += 'end\n\n';

  await writeFile(`./public/Mu Online/Darksteam97d99i/Generated Files/monster.txt`, fileContent);
  return './public/Mu Online/Darksteam97d99i/Generated Files/monster.txt';
};
