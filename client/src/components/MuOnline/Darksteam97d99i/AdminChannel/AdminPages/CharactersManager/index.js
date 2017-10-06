import React from 'react';

export default ({characters, onGetCharacters}) => {
  if(!characters){
    onGetCharacters();
    return null;
  }

  return (
    <div>
    </div>
  )
}