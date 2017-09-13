import React from 'react';

import ModPannel from './ModPannel';
import DetailView from './DetailView';
import DeckPannel from './DeckPannel';

export default ({
  onModSubmit,
  onDeckSubmit,
  addModFormState,
  addDeckFormState,
  onSelectMod,
  onSelectDeck,
  onGetModList,
  onGetDeckList,
  modList,
  modFocus,
  deckList,
  deckFocus,
  onChangeTab,
  activeTab,
  onEditModSubmit,
  onEditDeckSubmit,
  onDeleteMod,
  onDeleteDeck,
  editModForm,
  editDeckForm
}) => {
  if (!modList) {
    onGetModList();
    return null;
  }
  if (modList && modFocus && !deckList) {
    onGetDeckList(modFocus._id);
    return null;
  }

  return (
    <div className="ygo-main-screen static-position">
      <div className="row no-row-margin static-position">
        <div className="col-2 no-col-margin ygo-mod-pannel static-position">
          <ModPannel
            onModSubmit={onModSubmit}
            addModFormState={addModFormState}
            modList={modList}
            onSelectMod={onSelectMod}
            modFocus={modFocus}
          />
        </div>
        <div className="col-8 no-col-margin static-position">
          <DetailView
            mods={modList}
            mod={modFocus}
            deck={deckFocus}
            onChangeTab={onChangeTab}
            activeTab={activeTab}
            onEditModSubmit={onEditModSubmit}
            onEditDeckSubmit={onEditDeckSubmit}
            editModForm={editModForm}
            editDeckForm={editDeckForm}
            onDeleteMod={onDeleteMod}
            onDeleteDeck={onDeleteDeck}
          />
        </div>
        <div className="col no-col-margin static-position" style={{ backgroundColor: '#1e434c' }}>
          <DeckPannel
            onDeckSubmit={onDeckSubmit}
            addDeckFormState={addDeckFormState}
            deckList={deckList}
            onSelectDeck={onSelectDeck}
            deckFocus={deckFocus}
          />
        </div>
      </div>
    </div>
  );
};
