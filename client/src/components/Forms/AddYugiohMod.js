import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormGroupArray from './Tools/AddModal/FormGroupArray';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';

export default ({formState, onChange, onAdd, onRemove, onRating}) => (
  <form className="text-right">
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange}/>
    <FormGroupRow name="Icon" type="file" label="Icon" onChange={onChange}/>
    <FormGroupRow name="Image" type="file" label="Image" onChange={onChange}/>
    <FormGroupArray name="Credits" type="text" label="Credit" onChange={onChange} arrayValues={formState.Credits} onAdd={onAdd} onRemove={onRemove}/>
    <FormStarRating formName="AddYugiohMod" rating={formState.Rating} onRating={onRating}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange}/>
    <FormGroupArea name="Introduction" label="Introduction" onChange={onChange}/>
  </form>
)