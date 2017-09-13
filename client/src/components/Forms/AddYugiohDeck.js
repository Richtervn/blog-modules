import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormGroupArray from './Tools/AddModal/FormGroupArray';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';

export default ({formState, onChange, onAdd, onRemove, onRating}) => (
  <form className="text-right">
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange}/>
    <FormStarRating formName="AddYugiohDeck" rating={formState.Rating} onRating={onRating}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange}/>
    <FormGroupRow name="Image" type="file" label="Image" onChange={onChange}/>
    <FormGroupArray name="Pros" type="text" label="Pros" onChange={onChange} arrayValues={formState.Pros} onAdd={onAdd} onRemove={onRemove}/>
    <FormGroupArray name="Cons" type="text" label="Cons" onChange={onChange} arrayValues={formState.Cons} onAdd={onAdd} onRemove={onRemove}/>
    <FormGroupRow name="Winrate" type="number" label="Winrate" onChange={onChange}/>
  </form>
)