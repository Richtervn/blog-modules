import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';

export default ({ formState, onChange, onAdd, onRemove, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="Archive" type="file" label="Archive" onChange={onChange} />
    <FormGroupRow name="Icon" type="file" label="Icon" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description}/>
    <FormGroupArray
      name="Overview"
      type="text"
      label="Overview"
      onChange={onChange}
      arrayValues={formState.Overview}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormStarRating formName="AddD2Tool" rating={formState.Rating} onRating={onRating} />
  </form>
);
