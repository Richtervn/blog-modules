import React, { Component } from 'react';
import { appRouter } from 'utils';

class Page extends Component {
  constructor(props) {
    super(props);
    let isRecievedTree;
    if (this.props.menuTree) {
      isRecievedTree = false;
    } else {
      isRecievedTree = true;
    }
    this.state = { isRecievedTree };
  }

  componentWillReceiveProps(nextProps) {
    const { onSetActiveGroup, onSetActiveItem } = this.props;
    const { menuTree, activeItem, activeGroup } = nextProps;

    if (menuTree && !this.state.isRecievedTree) {
      this.setState({ isRecievedTree: true });
    }

    if (this.state.isRecievedTree) {
      const router = appRouter(menuTree);
      const currentPage = router.decode(window.location.pathname);

      if (activeItem !== currentPage.activeItem) {
        onSetActiveItem(currentPage.activeItem);
      }
      if (activeGroup !== currentPage.activeGroup) {
        onSetActiveGroup(currentPage.activeGroup);
      }
    }
  }

  render() {
    const { children } = this.props;
    const styles = {
      width: '100%',
      height: '100%'
    };

    return <div style={styles}>{children}</div>;
  }
}

export default Page;
