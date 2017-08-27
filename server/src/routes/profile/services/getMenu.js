export default async (readFile) => {
  const data = await readFile('./src/routes/profile/data/menu.json');
  const menu = JSON.parse(data.toString());
  return menu;
};
