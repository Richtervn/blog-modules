import React from 'react';

const optLevel = [0, 1, 2, 3, 4, 5, 6, 7];
const itemLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default ({ luck, skill, onChangeCheck, option, level, onChangeLevel }) => {
  return (
    <div>
      <div className="row no-row-margin">
        <div className="col no-col-margin text-center">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => onChangeCheck('luck')}
              checked={luck}
            />
            &nbsp;Luck&nbsp;
          </label>
        </div>
        <div className="col no-col-margin text-center">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => onChangeCheck('skill')}
              checked={skill}
            />
            &nbsp;Skill&nbsp;
          </label>
        </div>
      </div>
      <div className="row no-row-margin">
        <div className="col no-col-margin">
          <form className="form-inline flex-center">
            <label className="mr-sm-2">Item Level :</label>
            <select className="ds9799-sm-selector" name="level" onChange={onChangeLevel} value={level}>
              {itemLevel.map((lvl, i) => (
                <option value={lvl} key={i}>
                  {lvl}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="col no-col-margin">
          <form className="form-inline flex-center">
            <label className="mr-sm-2">Opt Level :</label>
            <select
              className="ds9799-sm-selector"
              name="option"
              onChange={onChangeLevel}
              value={option}>
              {optLevel.map((lvl, i) => (
                <option value={lvl} key={i}>
                  {lvl}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};
