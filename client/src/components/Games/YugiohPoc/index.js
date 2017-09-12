import React from 'react';

import ModPannel from './ModPannel';
import ModDetail from './ModDetail';

export default ({ onModSubmit, addModFormState, modList, modFocus, onGetModList, onSelectMod }) => {
  if (!modList) {
    onGetModList();
    return null;
  }
  return (
    <div className="ygo-main-screen">
      <div className="row no-row-margin">
        <div className="col-2 no-col-margin ygo-mod-pannel">
          <ModPannel
            onModSubmit={onModSubmit}
            addModFormState={addModFormState}
            modList={modList}
            onSelectMod={onSelectMod}
            modFocus={modFocus}
          />
        </div>
        <div className="col-7 no-col-margin" >
          <ModDetail mod={modFocus} />
        </div>
        <div className="col no-col-margin" style={{ backgroundColor: '#1e434c' }}>
          as
        </div>
      </div>
    </div>
  );
};
