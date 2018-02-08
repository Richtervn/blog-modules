import './ToolsBar.css';
import React from 'react';
import ContentSelector from './ContentSelector.container';

import { backgrounds } from 'app/manifest';

export default ({
  currentLanguage,
  isShareView,
  onChangeLanguage,
  onToggleShareView,
  onNewCode,
  onRefreshCode,
  opacity,
  onChangeOpacity,
  background,
  onChangeBackground,
  params
}) => (
  <div className="cm-toolsbar">
    <div>
      <button className={`btn ${currentLanguage === 'HTML' ? 'active' : ''}`} onClick={() => onChangeLanguage('HTML')}>
        <img className="icon" src="/images/icons/HTML.png" alt="HTML" />
      </button>
      <button className={`btn ${currentLanguage === 'CSS' ? 'active' : ''}`} onClick={() => onChangeLanguage('CSS')}>
        <img className="icon" src="/images/icons/CSS.png" alt="CSS" />
      </button>
      <button className={`btn ${isShareView ? 'active' : ''}`} onClick={() => onToggleShareView()}>
        <i className="fa fa-share-square-o" />
      </button>
    </div>
    <div className="selectors">
      <ContentSelector table={params.table} record={params.record} />
      <select className="form-control select" value={background} onChange={e => onChangeBackground(e.target.value)}>
        <option value="default" disabled hidden>
          Select Background
        </option>
        {backgrounds.map((bg, i) => (
          <option key={i} value={bg.file}>
            {bg.name}
          </option>
        ))}
      </select>
      <input
        className="form-control opacity-input"
        type="number"
        value={opacity}
        onChange={e => onChangeOpacity(e.target.value)}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
    <div>
      <button className="btn">
        <i className="fa fa-save" />
      </button>
      <button className="btn" onClick={() => onRefreshCode()}>
        <i className="fa fa-refresh" />
      </button>
      <button className="btn" onClick={() => onNewCode()}>
        <i className="fa fa-file-o" />
      </button>
    </div>
  </div>
);
