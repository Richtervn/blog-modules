const extraDataPath = './src/routes/diabloII/data/extra.json';

export default async (body, readFile, writeFile) => {
  const source = await readFile(extraDataPath);
  const extraData = JSON.parse(source.toString());

  const newData = { ...extraData, ...body };

  await writeFile(extraDataPath, JSON.stringify(newData, null, 2));
  
  return body;
};
