export default appTree => {
  const appRouter = {};
  Object.keys(appTree).forEach(group => {
    appRouter[group] = [];
    appTree[group].items.forEach(item => {
      let path = '/' + item.replace(/ /g, '_').toLowerCase();
      if (group === 'Flash Games') {
        path = '/flash_games' + path;
      }
      appRouter[group].push({
        item: item,
        path: path
      });
    });
  });

  return {
    encode(group, item) {
      let path = null;
      appRouter[group].forEach(router => {
        if (router.item === item) {
          path = router.path;
        }
      });
      return path;
    },
    decode(path) {
      const pathFrags = path.split('/');
      const pathStrict = `/${pathFrags[1]}`
      let result = {};
      Object.keys(appRouter).forEach(group => {
        appRouter[group].forEach(router => {
          if (router.path === pathStrict) {
            result.activeGroup = group;
            result.activeItem = router.item;
          }
        });
      });
      return result;
    }
  };
};
