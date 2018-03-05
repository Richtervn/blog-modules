import React from 'react';

export default ({ col, minHeight, borderRadius, border, color, iconSize, onClick }) => {
  const styles = {
    minHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    padding: '10px',
    marginRight: '10px'
  };
  const chosenColor = color ? color : 'white';
  styles.borderRadius = borderRadius || '4px';
  styles.border = border ? border : `dashed 1px ${chosenColor}`;

  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div style={styles} onClick={onClick}>
          <i className={`fa fa-plus-circle fa-${iconSize ? iconSize : '2'}x`} />
        </div>
      </div>
    </div>
  );
};
