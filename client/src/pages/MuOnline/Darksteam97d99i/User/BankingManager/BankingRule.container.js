import { connect } from 'react-redux';
import BankingRule from './BankingRule.component';

export default connect(({ ds9799_appControl }) => ({ gameSetting: ds9799_appControl.gameSetting }))(BankingRule);
