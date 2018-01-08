import React from 'react';

import FormGroupRow from './Tools/EditModal/FormGroupRow';
import FormStarRating from './Tools/AddModal/FormStarRating';
import FormGroupArea from './Tools/EditModal/FormGroupArea';
import FormGroupArray from './Tools/EditModal/FormGroupArray';
import FormGroupSelect from './Tools/EditModal/FormGroupSelect';

export default ({ formState, onChange, onAdd, onRemove, onRating, versions }) => (
  <form className="text-right">
    <FormGroupRow name="Archive" type="file" label="Archive" onChange={onChange} />
    <FormGroupRow name="Icon" type="file" label="Icon" onChange={onChange} />
    <FormGroupRow name="Background" type="file" label="Background" onChange={onChange} />
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange} value={formState.Name} />
    <FormGroupRow name="ModVersion" type="text" label="Mod Version" onChange={onChange} value={formState.ModVersion} />
    <FormGroupSelect
      name="Version"
      label="LOD Version"
      onChange={onChange}
      options={versions}
      value={formState.Version}
    />
    <FormGroupArray
      name="Overview"
      type="text"
      label="Overview"
      onChange={onChange}
      arrayValues={formState.Overview}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <FormGroupArea name="Description" label="Description" onChange={onChange} value={formState.Description} />
    <FormStarRating formName="EditD2Mod" rating={formState.Rating} onRating={onRating} />
  </form>
);
