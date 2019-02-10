import store from 'app/store';
import Modal from './Modal.container';

import { setModalName } from 'pages/appControl';

//options: { backdrop: 'static', keyboard: false }
const openModal = (name, options) => {
  store.dispatch(setModalName(name));
  if (!options) {
    window.$('#modal').modal('show');
  } else {
    window.$('#modal').modal({ show: true, ...options });
  }
};

const hideModal = () => {
  window.$('#modal').modal('hide');
};

export { Modal, openModal, hideModal };
