import React, { Component } from 'react';
import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';

export default ({ formState, onChange, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name} />
    <FormStarRating formName="AddStarcraftMod" rating={formState.Rating} onRating={onRating} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description} />
    <FormGroupArea
      name="Introduction"
      label="Introduction"
      onChange={onChange}
      value={formState.Introduction}
    />
    <FormGroupRow name="Version" type="text" label="Version" onChange={onChange} value={formState.Version} />
  </form>
);
