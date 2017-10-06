import React from 'react';

export default ({accounts, onGetAccounts}) => {
  if(!accounts){
    onGetAccounts();
    return null;
  }

  return (
    <div>
    </div>
  )
}