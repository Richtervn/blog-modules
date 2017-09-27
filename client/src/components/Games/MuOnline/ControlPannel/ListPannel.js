import React from 'react';
import ToolCard from './ToolCard';

export default ({ type, cards, onGetCards, onGetCardDetail, focusCard, onEditCardSubmit, onDeleteCard }) => {
  if (!cards) {
    onGetCards();
    return null;
  }

  if (cards && cards.length > 0 && !focusCard) {
    if (cards[0].Name) {
      onGetCardDetail(cards[0]._id);
      return null;
    }
    return null;
  }

  return (
    <div className="text-center">
      {type == 'Tool' &&
        cards.map((card, i) => (
          <ToolCard
            key={i}
            tool={card}
            isSelected={focusCard._id == card._id}
            onSelectTool={onGetCardDetail}
          />
        ))}
    </div>
  );
};
