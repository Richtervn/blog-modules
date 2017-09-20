import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import ModCard from './ModCard';
import ToolsBar from './ToolsBar';

export default ({
  mods,
  addModFormState,
  onModSubmit,
  onGetModList,
  modFocus,
  onSelect,
  onGetModDetail,
  onSort,
  onSearch
}) => {
  if (!mods) {
    onGetModList();
    return null;
  }

  if (!modFocus.Name && mods && mods.length > 0) {
    onGetModDetail(mods[0]._id);
    return null;
  }

  return (
    <div>
      <ToolsBar control="Mod" onSort={onSort} onSearch={onSearch} />
      {mods.map((mod, i) => (
        <ModCard key={i} mod={mod} onSelect={onSelect} isFocus={mod._id == modFocus._id} />
      ))}
      <FormModal id="addStarcraftModModal" formBody={addModFormState} onSubmit={onModSubmit} />
    </div>
  );
};
