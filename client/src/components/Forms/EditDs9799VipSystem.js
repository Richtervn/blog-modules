import React from 'react';
import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormGroupSelect from './Tools/EditModal/FormGroupSelect';

export default ({ formState, onChange, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="name" type="text" label="Name" onChange={onChange} value={formState.name}/>
    <FormGroupRow name="price" type="number" label="Price" onChange={onChange} value={formState.price}/>
    <FormGroupRow name="duration" type="number" label="Days" onChange={onChange} value={formState.duration}/>
    <FormGroupSelect name="type" label="Type" onChange={onChange} options={['Account', 'Character']} value={formState.type}/>
  </form>
);