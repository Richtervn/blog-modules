import React, { Component } from 'react';
import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';

export default ({formState, onChange, onRating}) =>
  <form className="text-right">
    <FormGroupRow name="File" type="file" label="MP3" onChange={onChange}/>
    <FormStarRating formName="AddMusic" rating={formState.Rating} onRating={onRating}/>
    <FormGroupRow name="Genre" type="text" label="Genre" onChange={onChange}/>
  </form>;
