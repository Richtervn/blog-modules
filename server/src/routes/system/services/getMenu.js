export default async (readFile, models, commonService) => {
  const { FlashGames, Notebooks, BookShelves } = models;

  const [data, flashGames, notebooks, bookShelves] = [
    await readFile('./src/routes/system/data/menu.json'),
    await commonService.getAll(FlashGames, { Name: true }, { sort: { Name: 'asc' } }),
    await commonService.getAll(Notebooks, { Label: true }, { sort: { Label: 'asc' } }),
    await commonService.getAll(BookShelves, { Title: true }, { sort: { Title: 'asc' } })
  ];

  const menu = JSON.parse(data.toString());
  flashGames.forEach(game => menu['Flash Games'].items.push(game.Name));
  notebooks.forEach(notebook => menu['Notebook'].items.push(notebook.Label));
  bookShelves.forEach(bookShelf => menu['Library'].items.push(bookShelf.Title));

  return menu;
};
