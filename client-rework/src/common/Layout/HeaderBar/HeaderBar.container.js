import { connect } from 'react-redux';
import HeaderBar from './HeaderBar.component';

const mapStateToProps = ({ appControl }) => {
  const { menuTree, activeGroup } = appControl;

  if (!menuTree || !activeGroup) {
    return {
      name: 'Home',
      quote: "There's no place like home. There's no place like HOME!!!",
      author: 'Breaking Benjamin - Home'
    };
  }

  return {
    name: activeGroup,
    quote: menuTree[activeGroup].quote,
    author: menuTree[activeGroup].author
  };
};

export default connect(mapStateToProps)(HeaderBar);
