import React from 'react';
import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormGroupSelect from './Tools/AddModal/FormGroupSelect';

export default ({ onChange, onRating }) => (
  <form className="text-right">
    <FormGroupRow name="name" type="text" label="Name" onChange={onChange} />
    <FormGroupRow name="price" type="number" label="Price" onChange={onChange} />
    <FormGroupRow name="duration" type="number" label="Days" onChange={onChange} />
    <FormGroupSelect name="type" label="Type" onChange={onChange} options={['Account', 'Character']}/>
  </form>
);