import React from 'react';
import classnames from 'classnames';

export default ({ name, label, onChange, value, error }) => {
  return (
    <div className="form-group row">
      <label htmlFor={`${name}Area`} className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label}:</strong>
      </label>
      <div className="col-sm-9">
        <textarea
          rows={4}
          className={classnames('form-control form-control-sm', {
            'is-valid': value && !error,
            'is-invalid': error
          })}
          id={`${name}Area`}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};
