import React from 'react';

export default ({ children, backgroundUrl, overflow, center, opacity, backgroundColor }) => {
  const styles = {
    width: 'calc(100vw - 200px)',
    height: 'calc(100vh - 45px)'
  };

  if (backgroundColor) {
    styles.backgroundColor = backgroundColor;
  }

  if (backgroundUrl) {
    styles.background = `url(${backgroundUrl})`;
    styles.backgroundSize = 'cover';
  }

  if (overflow) {
    styles.overflowY = 'auto';
  }

  if (center && !opacity) {
    styles.display = 'flex';
    styles.justifyContent = 'center';
    styles.alignItems = 'center';
  }

  if (opacity) {
    const opacityStyle = { background: `rgba(0, 0, 0, 0.${opacity})`, width: '100%', height: '100%', color: 'white' };
    if (center) {
      opacityStyle.display = 'flex';
      opacityStyle.justifyContent = 'center';
      opacityStyle.alignItems = 'center';
    }

    return (
      <div style={styles}>
        <div style={opacityStyle}>{children}</div>
      </div>
    );
  }

  return (
    <div style={styles}>
      <div className="container-fluid" style={{ height: '100%' }}>
        {children}
      </div>
    </div>
  );
};
