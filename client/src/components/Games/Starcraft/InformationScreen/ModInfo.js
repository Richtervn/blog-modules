import React from 'react';

export default ({ mod, onEditModSubmit, editModFormState, onDeleteMod }) => {
  if(!mod.Name){
    return null;
  }
  return (
    <div className="sc-green-box">
      <div style={{ paddingLeft: '20px' }} dangerouslySetInnerHTML={{ __html: '' }} />
    </div>
  );
};
