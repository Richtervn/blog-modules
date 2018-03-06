export default async (category, item, readFile, writeFile) => {
  const data = await readFile('./src/routes/system/data/menu.json');
  const menu = JSON.parse(data.toString());
  menu[category].items.push(item);
  await writeFile('./src/routes/system/data/menu.json', JSON.stringify(menu, null, 2));
  return menu;
}