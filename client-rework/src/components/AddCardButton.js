import React from 'react';

export default ({ col, minHeight, borderRadius, border, color, padding, iconSize, onClick }) => {
  const styles = { minHeight, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' };
  const chosenColor = color ? color : 'white';
  styles.borderRadius = borderRadius || '4px';
  styles.border = border ? border : `dashed 1px ${chosenColor}`;

  return (
    <div className={`col-${col}`} style={{ padding: padding ? padding : '0 10px 10px 0' }} onClick={onClick}>
      <div style={styles}>
        <i className={`fa fa-plus-circle fa-${iconSize ? iconSize : '2'}x`} />
      </div>
    </div>
  );
};
