import TopNavBar from 'components/TopNavBar';
import { connect } from 'react-redux';

export default connect(({ page }) => ({
  name: page.name,
  quote: page.quote,
  author: page.quoteAuthor
}))(TopNavBar);
