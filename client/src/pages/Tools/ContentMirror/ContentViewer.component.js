import './ContentViewer.css';
import React from 'react';

export default ({ htmlCode, cssCode, background, opacity }) => {
  const styles = {};
  if (background !== 'default') {
    styles.background = `url('/images/backgrounds/${background}')`;
  }
  const overlayStyle = {};
  if (opacity) {
    overlayStyle.background = `rgba(0, 0, 0, ${opacity})`;
  }
  return (
    <div style={styles} className="cm-content-viewer">
      <div style={overlayStyle} className="overlay">
        <div className="content-view">
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
        <style>{cssCode}</style>
      </div>
    </div>
  );
};
