import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';
import FormGroupSelect from './Tools/EditModal/FormGroupSelect';
import FormGroupCheck from './Tools/AddModal/FormGroupCheck';
import FormGroupSelectId from './Tools/AddModal/FormGroupSelectId';

const charTitle = ['No title', 'Slayer', 'Champion', 'Patriarch'];

export default ({ formState, onChange, onChangeCheck, onAdd, onRemove, onRating, mods }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="D2S File" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name} />
    <FormGroupSelect name="Title" label="Title" onChange={onChange} options={charTitle} value={formState.Title} />
    <FormGroupSelect
      name="Class"
      label="Class"
      onChange={onChange}
      options={['Amazon', 'Barbarian', 'Paladin', 'Druid', 'Sorceress', 'Assassin']}
      value={formState.Class}
    />
    <FormGroupRow name="Level" type="number" label="Level" onChange={onChange} value={formState.Level} />
    <FormGroupSelectId
      name="ModId"
      label="Mod"
      onChange={onChange}
      options={mods.map(mod => {
        return { _id: mod._id, name: mod.Name };
      })}
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
