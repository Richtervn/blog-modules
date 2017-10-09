import React from 'react';
import _ from 'underscore';

export default ({ onChangeCheck, category, exc, itemId }) => {
  let { exc1, exc2, exc3, exc4, exc5, exc6 } = exc;
  let excOpt1, excOpt2, excOpt3, excOpt4, excOpt5, excOpt6;

  if (_.contains(['Swords', 'Bows', 'Axes', 'Maces', 'Spears', 'Staffs'], category)) {
    excOpt1 = 'Excellent Damage Rate +10%';
    excOpt2 = 'Increases Damage +Level/20';
    excOpt3 = 'Increases Damage +2%';
    excOpt4 = 'Increases Attacking(Wizardry) Speed +7';
    excOpt5 = 'Increases Life After monster killed +Life/8';
    excOpt6 = 'Increases Mana After monster killed +Mana/8';
  }

  if (_.contains(['Armors', 'Boots', 'Gloves', 'Helms', 'Pants', 'Shields'], category)) {
    excOpt1 = 'Increase Max HP +4%';
    excOpt2 = 'Increase Max Mana +4%';
    excOpt3 = 'Damage Decrease +4%';
    excOpt4 = 'Reflect Damage +5%';
    excOpt5 = 'Defense Success Rate +10%';
    excOpt6 = 'Increases Zen After Monster Killed +40%';
  }

  if (_.contains(['Wings'], category)) {
    if (_.contains(['3', '4', '5', '6'], itemId)) {
      excOpt1 = 'Life +125 Increased';
      excOpt2 = 'Mana +125 Increased';
      excOpt3 = '10% Mana Loss Instead of Life';
      excOpt4 = '+50 of Damage Transfered as Life';
      excOpt5 = 'Increase Attacking(wizardry) Speed +5';
    }
  }

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
