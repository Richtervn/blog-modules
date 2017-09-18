import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';

export default ({ mods, addModFormState, onModSubmit, onGetModList, modFocus, onSelect, onGetModDetail }) => {
  if (!mods) {
    onGetModList();
    return null;
  }

  if(!modFocus.Name && mods && mods.length > 0){
    onGetModDetail(mods[0]._id);
    return null;
  }

  return (
    <div>
      <div className="sc-add-map-btn" data-toggle="modal" data-target="#addStarcraftModModal">
        <i className="fa fa-plus-circle" />
      </div>
      <FormModal id="addStarcraftModModal" formBody={addModFormState} onSubmit={onModSubmit} />
    </div>
  );
};
