import './BasicItemOptions.css';
import React from 'react';
import classNames from 'classnames';

const optLevel = [0, 1, 2, 3, 4, 5, 6, 7];
const itemLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default ({ luck, skill, onChangeCheck, option, level, onChangeLevel, customClass = 'default' }) => {
  return (
    <div className={classNames('ds9799-basic-item-opts', customClass)}>
      <div className="skill-luck">
        <label className="label">
          <input type="checkbox" className="check-box" onChange={() => onChangeCheck('luck')} checked={luck} />
          &nbsp;Luck&nbsp;
        </label>
        <label className="form-check-label">
          <input type="checkbox" className="check-box" onChange={() => onChangeCheck('skill')} checked={skill} />
          &nbsp;Skill&nbsp;
        </label>
      </div>
      <div className="level-opt">
        <div className="form-inline">
          <label>Item Level :</label>
          <select className="form-control" name="level" onChange={e => onChangeLevel(e)} value={level}>
            {itemLevel.map((lvl, i) => (
              <option value={lvl} key={i}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
        <form className="form-inline">
          <label>Opt Level :</label>
          <select className="form-control" name="option" onChange={e => onChangeLevel(e)} value={option}>
            {optLevel.map((lvl, i) => (
              <option value={lvl} key={i}>
                {lvl}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};
