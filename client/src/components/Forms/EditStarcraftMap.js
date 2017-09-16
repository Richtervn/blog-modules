import React, { Component } from 'react';
import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';

export default ({ formState, onChange, onAdd, onRemove, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="File" type="file" label="Map File" onChange={onChange}/>
    <FormStarRating formName="EditStarcraftMap" rating={formState.Rating} onRating={onRating} />
    <FormGroupRow name="Matchup" type="text" label="Match up" onChange={onChange} value={formState.Matchup}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description}/>
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
