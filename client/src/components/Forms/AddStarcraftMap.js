import React, { Component } from 'react';
import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';
import FormGroupArray from './Tools/AddModal/FormGroupArray';

export default ({ formState, onChange, onAdd, onRemove, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="File" type="file" label="Map File" onChange={onChange} />
    <FormStarRating formName="AddStarcraftMap" rating={formState.Rating} onRating={onRating} />
    <FormGroupRow name="Matchup" type="text" label="Match up" onChange={onChange} />
    <FormGroupArea name="Description" label="Description" onChange={onChange} />
    <FormGroupArray
      name="Tipntrick"
      type="text"
      label="Tip and Trick"
      onChange={onChange}
      arrayValues={formState.Tipntrick}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  </form>
);
