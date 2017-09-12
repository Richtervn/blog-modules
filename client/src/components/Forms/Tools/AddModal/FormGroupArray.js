import React from 'react';

export default ({ label, type, name, placeholder, arrayValues, onChange, onRemove, onAdd }) => {
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label}:</strong>
      </label>
      <div className="col-sm-9">
        {arrayValues.map((arrayValue, index) => (
          <div className="row no-row-margin" key={index}>
            <div className="col-10 no-row-margin">
              <input
                type={type}
                className="form-control form-control-sm"
                placeholder={placeholder}
                onChange={event => onChange(event, index)}
                name={name}
              />
            </div>
            <div className="col-2 no-row-margin">
              <button
                className="btn btn-danger channel-button"
                type="button"
                onClick={() => onRemove(name, index)}>
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
        ))}
         <button className="btn btn-primary btn-sm" type="button" onClick={() => onAdd(name)} style={{float: 'left', marginTop: '5px'}}>
          <span>
            <i className="fa fa-plus" />
          </span>&nbsp; {`Add ${name}`}
        </button>
      </div>
    </div>
  );
};
