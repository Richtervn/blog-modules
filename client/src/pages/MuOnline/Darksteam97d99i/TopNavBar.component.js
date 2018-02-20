import './TopNavBar.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

const TopNavBar = ({ activeTab, onSetActiveTab, history, currentUserPage, currentAdminPage, currentServerPage }) => {
  const getRoute = heading => {
    let currentPage;
    switch (heading) {
      case 'User':
        currentPage = currentUserPage;
        break;
      case 'Admin':
        currentPage = currentAdminPage;
        break;
      case 'Server':
        currentPage = currentServerPage;
        break;
      default:
        break;
    }
    return `/darksteam_97d99i/${heading.toLowerCase()}/${currentPage}`;
  };

  return (
    <div className="row">
      <div className="ds9799-top-nav-bar">
        <div className="left">
          <img className="logo" src="/images/icons/mulogo.png" alt="mu-logo" />
          <div className="label">Classic MU</div>
        </div>
        <div className="right">
          {['User', 'Admin', 'Server'].map((heading, i) => (
            <div
              key={i}
              className={`tab ${activeTab === heading ? 'active' : ''}`}
              onClick={() => {
                onSetActiveTab(heading);
                history.push(getRoute(heading));
              }}>
              {heading}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopNavBar);
