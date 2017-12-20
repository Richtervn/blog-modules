import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';
import FormGroupSelect from './Tools/EditModal/FormGroupSelect';

export default ({ formState, onChange, onChangeCheck, onAdd, onRemove, onRating, mods }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="File" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name}/>
    <FormGroupSelect name="Type" label="Type" onChange={onChange} options={['Character', 'Item', 'Store']} value={formState.Type}/>
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
    <FormStarRating formName="AddD2SurvivalKit" rating={formState.Rating} onRating={onRating} />
  </form>
);
