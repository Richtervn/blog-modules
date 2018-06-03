import './TopNavBar.css';
import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

const getRoute = (tabName, userPage, adminPage, serverPage) => {
  let activePage = null;
  switch (tabName) {
    case 'user':
      activePage = userPage;
      break;
    case 'admin':
      activePage = adminPage;
      break;
    case 'server':
      activePage = serverPage;
      break;
    default:
      activePage = userPage;
      break;
  }

  return `/darksteam_97d99i/${tabName}${activePage ? '/' + activePage : ''}`;
};

const TopNavBar = ({ activeTab, userPage, adminPage, serverPage, onSetActiveTab, history }) => (
  <div className="row">
    <div className="ds9799-top-nav-bar">
      <div className="left" onClick={() => history.push('/darksteam_97d99i/user/introduction')}>
        <img className="logo" src="/images/icons/mulogo.png" alt="mu-logo" />
        <div className="label">Classic MU</div>
      </div>
      <div className="right">
        {['User', 'Admin', 'Server'].map((heading, i) => {
          const tabName = heading.toLowerCase();
          return (
            <div
              key={i}
              className={classNames('tab', { active: activeTab === tabName })}
              onClick={() => {
                onSetActiveTab(tabName);
                history.push(getRoute(tabName, userPage, adminPage, serverPage));
              }}>
              {heading}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default withRouter(TopNavBar);
