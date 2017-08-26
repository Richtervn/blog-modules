import React, { Component } from 'react';
import FormGroupRow from './FormGroupRow';

export default ({onChange}) =>
  <form className="text-right">
    <FormGroupRow name="Name" type="text" label="Name" onChange={onChange}/>
    <FormGroupRow name="File" type="file" label="SWF File" onChange={onChange}/>
  </form>;
