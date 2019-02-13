import React, { useState } from 'react';
import classnames from 'classnames';
import { SketchPicker } from 'react-color';

export default ({ label, error, color, onChange }) => {
  const [changed, setChanged] = useState(false);

  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label}:</strong>
      </label>
      <div className="col-sm-9">
        <SketchPicker
          className={classnames({
            'is-valid': changed && !error,
            'is-invalid': error
          })}
          onChangeComplete={c => {
            let colorString = '';
            if (c.rgb.a !== 1) {
              colorString = `rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`;
            } else {
              colorString = c.hex;
            }
            if (!changed) {
              setChanged(true);
            }

            onChange(colorString);
          }}
          color={color}
        />
      </div>
    </div>
  );
};
