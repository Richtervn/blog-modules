import './UploadButton.css';
import React from 'react';

export default ({ className, children, onChange }) => (
  <div className="upload-button">
    <button className={className}>{children}</button>
    <input className="file-input" type="file" onChange={e => onChange(e.target.files[0])} />
  </div>
);
