import FormAddFlashGame from 'containers/FormAddFlashGame';

const makeIcon = (name, ext) => {
  const iconPath = 'app_modules/images/icons/';
  let iconLink = `${iconPath}${name}`;
  iconLink += ext ? ext : '.png';
  return iconLink;
};

export default id => {
  let modalDisplay = {
    header: {
      icon: '',
      label: ''
    },
    body: () => null
  };
  switch (id) {
    case 'addFlashGameModal':
      return {
        ...modalDisplay,
        header: { icon: makeIcon('gamepad'), label: 'Add New Flash Game' },
        body: FormAddFlashGame
      };
    default:
      return modalDisplay;
  }
};
