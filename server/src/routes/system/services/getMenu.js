export default async (readFile, models, commonService) => {
  const { FlashGames, Notebook, BookShelves } = models;

  const [data, flashGames, notebooks, bookShelves] = [
    await readFile('./src/routes/system/data/menu.json'),
    await commonService.getAll(
      FlashGames,
      { Name: true, Guide: false, Uri: false, Height: false, Width: false },
      { sort: { Name: 'asc' } }
    ),
    await commonService.getAll(Notebook, { Label: true, Content: false, CSS: false }, { sort: { Label: 'asc' } }),
    await commonService.getAll(BookShelves, { Title: true, Books: false }, { sort: { Title: 'asc' } })
  ];
  flashGames.forEach(game => menu['Flash Games'].items.push(game.Name));
  notebooks.forEach(notebook => menu['Notebook'].items.push(notebook.Label));
  bookShelves.forEach(bookShelf => menu['Library'].items.push(bookShelf.Title));

  const menu = JSON.parse(data.toString());
  return menu;
};
