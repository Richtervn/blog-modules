import React from 'react';
import DeckCard from './DeckCard';
import FormModal from 'components/FormModal';

export default ({ onDeckSubmit, addDeckFormState, deckList, deckFocus, onSelectDeck }) => (
  <div className="text-center">
    {deckList.map(deck => (
      <DeckCard
        deck={deck}
        key={deck._id}
        onSelectDeck={onSelectDeck}
        isSelected={deck._id == deckFocus._id}
      />
    ))}
    <div className="ygo-add-mod-card">
      <div className="ygo-add-mod-card-icon" data-toggle="modal" data-target="#addYgoDeckModal">
        <i className="fa fa-plus-circle ygo-add-mod-card-button" />
      </div>
    </div>
    <FormModal
      id="addYgoDeckModal"
      onSubmit={onDeckSubmit}
      formBody={addDeckFormState}
    />
  </div>
);