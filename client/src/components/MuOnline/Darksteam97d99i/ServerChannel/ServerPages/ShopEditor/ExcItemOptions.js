import React from 'react';
import _ from 'underscore';
import getMuExcText from 'factories/getMuExcText';

export default ({ onChangeCheck, category, exc, itemId }) => {
  let { exc1, exc2, exc3, exc4, exc5, exc6 } = exc;
  let { excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6 } = getMuExcText(category, itemId);

  if (!excOpt1) return null;

  return (
    <div style={{ padding: '20px' }}>
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc1')}
          checked={exc1}
        />
        &nbsp;{excOpt1}&nbsp;
      </label>
      <br />
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc2')}
          checked={exc2}
        />
        &nbsp;{excOpt2}&nbsp;
      </label>
      <br />
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc3')}
          checked={exc3}
        />
        &nbsp;{excOpt3}&nbsp;
      </label>
      <br />
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc4')}
          checked={exc4}
        />
        &nbsp;{excOpt4}&nbsp;
      </label>
      <br />
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc5')}
          checked={exc5}
        />
        &nbsp;{excOpt5}&nbsp;
      </label>
      <br />
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => onChangeCheck('exc6')}
          checked={exc6}
        />
        &nbsp;{excOpt6}&nbsp;
      </label>
      <br />
    </div>
  );
};
