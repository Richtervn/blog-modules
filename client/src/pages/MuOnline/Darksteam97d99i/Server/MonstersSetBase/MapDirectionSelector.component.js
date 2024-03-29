import React from 'react';

export default ({ onSelect, value }) => (
  <select className="form-control" onChange={onSelect} value={value}>
    <option value="" hidden>
      Direction
    </option>
    <option value={2}>&#8595; South</option>
    <option value={3}>&#8600; South East</option>
    <option value={4}>&#8594; East</option>
    <option value={5}>&#8599; North East</option>
    <option value={6}>&#8593; North</option>
    <option value={7}>&#8598; North West</option>
    <option value={8}>&#8592; West</option>
    <option value={9}>&#8601; South West</option>
  </select>
);
