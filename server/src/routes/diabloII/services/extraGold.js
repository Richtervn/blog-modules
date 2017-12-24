const extraDataPath = './src/routes/diabloII/data/extra.json';

export default async (amount, type, readFile, writeFile) => {
  const source = await readFile(extraDataPath);
  const extraData = JSON.parse(source.toString());

  if (type == 'add') {
    extraData.SavedGold += parseInt(amount);
  } else {
    extraData.SavedGold -= parseInt(amount);
  }

  await writeFile(extraDataPath, JSON.stringify(extraData, null, 2));
  return { SavedGold: extraData.SavedGold };
};
