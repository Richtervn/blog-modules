import React from 'react';

import AccountsList from './AccountsList';
import AccountInfo from './AccountInfo';

export default ({accounts, onGetAccounts, onSetFocusAccount, focusAccount}) => {
  if(!accounts){
    onGetAccounts();
    return null;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-2 no-col-margin ds9799-acc-list-container">
        <AccountsList accounts={accounts} activeAccountId={focusAccount.memb___id} onSelect={onSetFocusAccount}/>
      </div>
      <div className="col-10 no-col-margin">
        <AccountInfo account={focusAccount}/>
      </div>
    </div>
  )
}
