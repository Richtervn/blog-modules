import store from 'app/store';
import Modal from './Modal.container';

import { setModalName } from 'pages/appControl';

const openModal = name => {
  store.dispatch(setModalName(name));
  window.$('#modal').modal('show');
};

const hideModal = () => {
  window.$('#modal').modal('hide');
};

export { Modal, openModal, hideModal };
