import Modal from './Modal.components';
import { connect } from 'react-redux';

const mapStateToProps = ({ appControl }) => ({ name: appControl.modalName });

export default connect(mapStateToProps)(Modal);
