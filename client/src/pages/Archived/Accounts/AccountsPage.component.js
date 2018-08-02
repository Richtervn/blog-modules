import './AccountsPage.css';
import React from 'react';

import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import { AddCardButton } from 'components/Buttons';

import AccountCard from './AccountCard.container';
import ToolsBar from './ToolsBar.container';

export default ({ accounts }) => {
  if (!accounts) {
    return (
      <div className="row">
        <PageLoader />
      </div>
    );
  }
  return (
    <div id="accounts-page">
      <div className="row">
        <ToolsBar />
      </div>
      <div className="row accounts-row">
        {accounts.map(account => <AccountCard key={account._id} account={account} />)}
        <AddCardButton
          customClass="add-account-btn"
          col={3}
          minHeight="117px"
          onClick={() => openModal('AddAccount')}
        />
      </div>
    </div>
  );
};
// className="row accounts-page-row">
