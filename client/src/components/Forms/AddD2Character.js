import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';
import FormGroupArray from './Tools/AddModal/FormGroupArray';
import FormGroupSelect from './Tools/AddModal/FormGroupSelect';
import FormGroupCheck from './Tools/AddModal/FormGroupCheck';
import FormGroupSelectId from './Tools/AddModal/FormGroupSelectId';

const charTitle = ['No title', 'Slayer', 'Champion', 'Patriarch'];

export default ({ formState, onChange, onChangeCheck, onAdd, onRemove, onRating, mods }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="D2S File" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} />
    <FormGroupSelect name="Title" label="Title" onChange={onChange} options={charTitle} />
    <FormGroupSelect
      name="Class"
      label="Class"
      onChange={onChange}
      options={['Amazon', 'Barbarian', 'Paladin', 'Druid', 'Sorceress', 'Assasin', 'Necromancer']}
    />
    <FormGroupRow name="Level" type="number" label="Level" onChange={onChange} />
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
    <FormStarRating formName="AddD2Character" rating={formState.Rating} onRating={onRating} />
    <FormGroupCheck name="IsCount" label="Is Count" onChangeCheck={onChangeCheck} value={formState.IsCount} />
  </form>
);
