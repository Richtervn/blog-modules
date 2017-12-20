import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';
import FormGroupArray from './Tools/AddModal/FormGroupArray';
import FormGroupSelect from './Tools/AddModal/FormGroupSelect';

export default ({ formState, onChange, onAdd, onRemove, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="file" type="file" label="File" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} />
    <FormGroupSelect name="Type" label="Type" onChange={onChange} options={['Character', 'Item', 'Store']} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} />
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
