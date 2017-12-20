import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';
import FormGroupSelect from './Tools/EditModal/FormGroupSelect';
import FormGroupCheck from './Tools/AddModal/FormGroupCheck';
import FormGroupSelectId from './Tools/AddModal/FormGroupSelectId';

export default ({ formState, onChange, onChangeCheck, onAdd, onRemove, onRating, mods }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="D2S File" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} />
    <FormGroupSelect
      name="Class"
      label="Class"
      onChange={onChange}
      options={['Amazon', 'Barbarian', 'Paladin', 'Druid', 'Sorceress', 'Assasin']}
      value={formState.Class}
    />
    <FormGroupSelectId
      name="ModId"
      label="Mod"
      onChange={onChange}
      options={mods.map(mod => ({ _id: mod._id, name: mod.Name }))}
      value={formState.ModId}
    />
    <FormGroupArray
      name="Overview"
      type="text"
      label="Overview"
      onChange={onChange}
      arrayValues={formState.Overview}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormStarRating formName="AddMuonlineTool" rating={formState.Rating} onRating={onRating} />
    <FormGroupCheck name="IsCount" label="Is Count" onChangeCheck={onChangeCheck} value={formState.IsCount} />
  </form>
);
