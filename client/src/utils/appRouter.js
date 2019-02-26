export default appTree => {
  const appRoutes = {};
  Object.keys(appTree).forEach(group => {
    appRoutes[group] = [];
    appTree[group].items.forEach(item => {
      let path = '/' + encodeURIComponent(item.replace(/ /g, '_').toLowerCase());

      if (group === 'Flash Games') path = `/flash_games${path}`;
      if (group === 'Library') path = `/library${path}`;
      if (group === 'Notebook') path = `/notebook${path}`;

      appRoutes[group].push({
        item: item,
        path: path
      });
    });
  });

  return {
    encode(group, item) {
      let path = null;
      const route = appRoutes[group].find(r => r.item === item);
      if (route) {
        path = route.path;
      }
      return path;
    },
    decode(path) {
      let result = {};

      Object.keys(appRoutes).forEach(group => {
        const route = appRoutes[group].find(r => path.indexOf(r.path) !== -1);
        if (route) {
          result.activeGroup = group;
          result.activeItem = route.item;
        }
      });

      return result;
    }
  };
};
