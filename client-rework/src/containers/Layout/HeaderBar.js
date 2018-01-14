import { connect } from 'react-redux';
import { HeaderBar } from 'components/Layout';

import { getMenuTree } from 'modules/appControl';

const mapStateToProps = ({ appControl }) => {
  const { menuTree, activeGroup } = appControl;

  if (!menuTree && !activeGroup) {
    return {
      name: 'Home'
    };
  }
  console.log(activeGroup);
  if (menuTree && !activeGroup) {
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

const mapDispatchToProps = dispatch => ({
  onGetMenuTree() {
    dispatch(getMenuTree());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
