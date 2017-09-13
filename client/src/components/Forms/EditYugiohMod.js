import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormGroupArray from './Tools/EditModal/FormGroupArray';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormStarRating from './Tools/AddModal/FormStarRating';

export default ({ formState, onChange, onRating, onAdd, onRemove }) => (
  <form className="text-right">
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name} />
    <FormGroupRow name="Icon" type="file" label="Icon" onChange={onChange} />
    <FormGroupRow name="Image" type="file" label="Image" onChange={onChange} />
    <FormGroupArray
      name="Credits"
      type="text"
      label="Credit"
      onChange={onChange}
      arrayValues={formState.Credits}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormStarRating formName="EditYugiohMod" rating={formState.Rating} onRating={onRating} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description} />
    <FormGroupArea
      name="Introduction"
      label="Introduction"
      onChange={onChange}
      value={formState.Introduction}
    />
  </form>
);
