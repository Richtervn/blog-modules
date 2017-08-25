export default async (readFile) => {
  const data = await readFile('./src/routes/system/data/menu.json');
  const menu = JSON.parse(data.toString());
  return menu;
};
