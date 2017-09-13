import React from 'react';
import TabNavBar from 'components/TabNavBar';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';
import ModDetailView from './ModDetailView';
import DeckDetailView from './DeckDetailView';

export default ({
  mod,
  mods,
  deck,
  onChangeTab,
  activeTab,
  onEditModSubmit,
  onEditDeckSubmit,
  onDeleteMod,
  onDeleteDeck,
  editModForm,
  editDeckForm
}) => (
  <div className="static-position">
    <TabNavBar
      headers={['Mod', 'Deck']}
      type="ygo"
      id={mod._id}
      activeTab={activeTab}
      onChangeTab={onChangeTab}
    />
    <div className="tab-content static-position">
      <div role="tabpanel" className="tab-pane static-position active" id={`tabygo${mod._id}Mod`}>
        <ModDetailView mod={mod} />
      </div>
      <div role="tabpanel" className="tab-pane static-position fade" id={`tabygo${mod._id}Deck`}>
        <DeckDetailView deck={deck} />
      </div>
    </div>
    {mod &&
    activeTab == 'Mod' && <FormModal id="editYgoModModal" formBody={editModForm} onSubmit={onEditModSubmit} />}
    {mod &&
    activeTab == 'Mod' && (
      <DeleteModal
        id="deleteYgoModModal"
        text={`Hey man, make sure you want to delete ${mod.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteMod(mod._id, mods[0])}
      />
    )}
    {deck &&
    activeTab == 'Deck' && (
      <FormModal id="editYgoDeckModal" formBody={editDeckForm} onSubmit={onEditDeckSubmit} />
    )}
    {deck &&
    activeTab == 'Deck' && (
      <DeleteModal
        id="deleteYgoDeckModal"
        text={`Hey man, make sure you want to delete ${deck.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteDeck(deck._id)}
      />
    )}
  </div>
);
