const makeIcon = (name, ext) => {
  const iconPath = 'app_modules/images/icons/';
  let iconLink = `${iconPath}${name}`;
  iconLink += ext ? ext : '.png';
  return iconLink;
};

export default id => {
  let modalDisplay = {
    header: {
      icon: makeIcon('danger'),
      label: ''
    }
  };
  switch (id) {
    case 'deleteYgoModModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Yugioh Mod' } };
    case 'deleteYgoDeckModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Yugioh Deck' } };
    case 'deleteStarcraftMapModal':
      return { header: { icon: makeIcon('danger'), label: 'Delete Starcraft Map' } };
    default:
      return modalDisplay;
  }
};
