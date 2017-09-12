import FormAddFlashGame from 'containers/FormAddFlashGame';
import FormAddYugiohMod from 'containers/FormAddYugiohMod';

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
        header: { icon: makeIcon('gamepad'), label: 'Add New Flash Game' },
        body: FormAddFlashGame
      };
    case 'addYgoModModal':
      return {
        header: {icon: makeIcon('gamepad'), label: 'Add New Yugioh Mod'},
        body: FormAddYugiohMod
      }
    default:
      return modalDisplay;
  }
};
