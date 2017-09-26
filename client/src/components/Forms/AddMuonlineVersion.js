import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';
import FormGroupArray from './Tools/AddModal/FormGroupArray';

export default ({ formState, onChange, onAdd, onRemove, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="Archive" onChange={onChange} />
    <FormGroupArray
      name="Credits"
      type="text"
      label="Credits"
      onChange={onChange}
      arrayValues={formState.Credits}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormGroupRow name="Version" type="text" label="Version" onChange={onChange} />
    <FormStarRating formName="AddMuonlineVersion" rating={formState.Rating} onRating={onRating} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} />
    <FormGroupArea name="Introduce" label="Introduce" onChange={onChange} />
  </form>
);
