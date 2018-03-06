export default async (category, oldItem, newItem, readFile, writeFile) => {
  const data = await readFile('./src/routes/system/data/menu.json');
  const menu = JSON.parse(data.toString());
  menu[category].items = menu[category].items.map(item => {
    if (item == oldItem) {
      return newItem;
    }
    return item;
  });
  await writeFile('./src/routes/system/data/menu.json', JSON.stringify(menu, null, 2));
  return menu;
};
