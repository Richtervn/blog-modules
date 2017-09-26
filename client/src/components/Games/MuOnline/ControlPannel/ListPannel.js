import React from 'react';

export default ({cards, onGetCards, onGetCardDetail, focusCard, onEditCardSubmit, onDeleteCard}) => {
  if(!cards){
    onGetCards();
    return null;
  }
  if(cards && cards.length > 0 && !focusCard.Name){
    if(cards[0].Name){
      onGetCardDetail(cards[0]._id);
      return null;
    }
    return null;
  }
  return (
    <div></div>
  )
}