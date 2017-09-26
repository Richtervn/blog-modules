import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';

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
    <FormGroupRow name="Version" type="text" label="Version" onChange={onChange} value={formState.Version}/>
    <FormStarRating formName="EditMuonlineVersion" rating={formState.Rating} onRating={onRating} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description}/>
    <FormGroupArea name="Introduce" label="Introduce" onChange={onChange} value={formState.Introduce}/>
  </form>
);
