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
    case 'darksteam97d99iAddPointErr':
      return { header: { icon: makeIcon('danger'), label: 'An error occurred' } };
    default:
      return modalDisplay;
  }
};
