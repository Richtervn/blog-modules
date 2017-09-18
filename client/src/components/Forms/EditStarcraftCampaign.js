import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';

export default ({formState, onChange, onRating}) => (
  <form className="text-right">
    <FormGroupRow name="File" type="file" label="Archive" onChange={onChange}/>
    <FormStarRating formName="EditStarcraftCampaign" rating={formState.Rating} onRating={onRating}/>
    <FormGroupRow name="Matchup" type="text" label="Match Up" value={formState.Matchup}/>
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description}/>
    <FormGroupRow name="Version" type="text" label="Version" onChange={onChange} value={formState.Version}/>
  </form>
)