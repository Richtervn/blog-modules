import Modal from 'components/Modal';
import { connect } from 'react-redux';

export default connect(
  ({ page }) => ({
    id: page.modalId
  })
)(Modal);
