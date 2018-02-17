export default async (body, readFile, writeFile) => {
  await writeFile('./src/routes/system/data/menu.json', JSON.stringify(body, null, 2));
  return body;
};
