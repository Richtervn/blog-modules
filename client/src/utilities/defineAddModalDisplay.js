import FormAddFlashGame from 'containers/FormAddFlashGame';
import FormAddYugiohMod from 'containers/FormAddYugiohMod';
import FormAddYugiohDeck from 'containers/FormAddYugiohDeck';
import FormEditYugiohMod from 'containers/FormEditYugiohMod';
import FormEditYugiohDeck from 'containers/FormEditYugiohDeck';
import FormAddMusic from 'containers/FormAddMusic';

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
        header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Mod' },
        body: FormAddYugiohMod
      };
    case 'addYgoDeckModal':
      return {
        header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Deck' },
        body: FormAddYugiohDeck
      };
    case 'editYgoModModal':
      return {
        header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Mod' },
        body: FormEditYugiohMod
      };
    case 'editYgoDeckModal':
      return {
        header: {icon: makeIcon('gamepad'), label: 'Edit Yugioh Deck'},
        body: FormEditYugiohDeck
      }
    case 'addMusicModal':
      return {
        header: {icon: makeIcon('music'), label: 'Add New Song'},
        body: FormAddMusic
      }
    default:
      return modalDisplay;
  }
};
