import './ContentViewer.css';
import React from 'react';

const getAdditionClass = collection => {
  let additionClass = '';
  switch (collection) {
    case 'StarcraftCampaigns':
      additionClass = 'sc-content-viewer';
      break;
    case 'StarcraftMods':
      additionClass = 'sc-content-viewer';
      break;
    default:
      break;
  }
  return additionClass;
};

export default ({ htmlCode, cssCode, background, opacity, collection }) => {
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
        <div className={`content-view ${getAdditionClass(collection)}`}>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
        <style>{cssCode}</style>
      </div>
    </div>
  );
};
