import React from 'react';

import FormGroupRow from './Tools/AddModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/AddModal/FormGroupArea';

export default ({formState, onChange, onRating}) => (
  <form className="text-right">
    <FormGroupRow name="File" type="file" label="Archive" onChange={onChange}/>
    <FormStarRating formName="AddStarcraftCampaign" rating={formState.Rating} onRating={onRating}/>
    <FormGroupRow name="Matchup" label="Match Up" type="text" onChange={onChange}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange}/>
    <FormGroupArea name="Introduction" label="Introduction" onChange={onChange}/>
    <FormGroupRow name="Version" type="text" label="Version" onChange={onChange}/>
  </form>
)