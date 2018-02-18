import './Page.css';
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
    const { onSetActiveGroup, onSetActiveItem, onSetDefaultShowGroup, onToggleMenuGroup } = this.props;
    const { menuTree, activeItem, activeGroup } = nextProps;

    if (menuTree && !this.state.isRecievedTree) {
      this.setState({ isRecievedTree: true });
    }

    if (menuTree && this.state.isRecievedTree) {
      const router = appRouter(menuTree);
      const currentPage = router.decode(window.location.pathname);

      if (activeItem !== currentPage.activeItem) {
        onSetActiveItem(currentPage.activeItem);
      }
      if (activeGroup !== currentPage.activeGroup) {
        onSetActiveGroup(currentPage.activeGroup);
        onSetDefaultShowGroup(currentPage.activeGroup);
        onToggleMenuGroup(currentPage.activeGroup);
      }
    }
  }

  render() {
    const { children } = this.props;

    return <div className="page">{children}</div>;
  }
}

export default Page;
