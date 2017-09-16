import FormAddFlashGame from 'containers/Forms/FormAddFlashGame';
import FormAddYugiohMod from 'containers/Forms/FormAddYugiohMod';
import FormAddYugiohDeck from 'containers/Forms/FormAddYugiohDeck';
import FormEditYugiohMod from 'containers/Forms/FormEditYugiohMod';
import FormEditYugiohDeck from 'containers/Forms/FormEditYugiohDeck';
import FormAddMusic from 'containers/Forms/FormAddMusic';
import FormAddStarcraftMap from 'containers/Forms/FormAddStarcraftMap';
import FormEditStarcraftMap from 'containers/Forms/FormEditStarcraftMap';

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
        header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Deck' },
        body: FormEditYugiohDeck
      };
    case 'addMusicModal':
      return {
        header: { icon: makeIcon('music'), label: 'Add New Song' },
        body: FormAddMusic
      };
    case 'addStarcraftMapModal':
      return {
        header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Map' },
        body: FormAddStarcraftMap
      };
    case 'editStarcraftMapModal':
      return {
        header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Map' },
        body: FormEditStarcraftMap
      };
    default:
      return modalDisplay;
  }
};
