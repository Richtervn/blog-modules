import { connect } from 'react-redux';
import Introduction from './Introduction.component';

export default connect(({ ds9799_introduction }) => ({
  activeTab: ds9799_introduction.activeTab
}))(Introduction);
