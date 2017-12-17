import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';
import FormGroupArray from './Tools/AddModal/FormGroupArray';
import FormGroupSelect from './Tools/AddModal/FormGroupSelect';

export default ({ formState, onChange, onAdd, onRemove, onRating, versions }) => (
  <form className="text-right">
    <FormGroupRow name="Archive" type="file" label="Archive" onChange={onChange} />
    <FormGroupRow name="Icon" type="file" label="Icon" onChange={onChange} />
    <FormGroupRow name="Background" type="file" label="Background" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} />
    <FormGroupRow name="ModVersion" type="text" label="Mod Version" onChange={onChange} />
    <FormGroupSelect name="Version" label="LOD Version" onChange={onChange} options={versions} />
    <FormGroupArray
      name="Overview"
      type="text"
      label="Overview"
      onChange={onChange}
      arrayValues={formState.Overview}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormGroupArea name="Description" label="Description" onChange={onChange} />
    <FormStarRating formName="AddD2Mod" rating={formState.Rating} onRating={onRating} />
  </form>
);
