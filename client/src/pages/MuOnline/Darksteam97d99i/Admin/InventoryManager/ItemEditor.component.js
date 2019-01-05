import React from 'react';
import { ExcItemOptions, ItemSelector, BasicItemOptions } from '../../components';

export default ({
  category,
  itemId,
  level,
  luck,
  skill,
  option,
  exc1,
  exc2,
  exc3,
  exc4,
  exc5,
  exc6,
  onSelectCategory,
  onSelectItem,
  onChangeLevel,
  onChangeCheck
}) => (
  <div className="ds9799-item-editor">
    <ItemSelector
      onSelectCategory={e => onSelectCategory(e.target.value)}
      category={category}
      onSelectItem={e => onSelectItem(e.target.value)}
      itemId={itemId}
      itemLvl={level}
    />
    <BasicItemOptions
      luck={luck}
      skill={skill}
      onChangeCheck={name => onChangeCheck(name)}
      option={option}
      level={level}
      onChangeLevel={e => onChangeLevel(e)}
    />
    <ExcItemOptions
      exc={{ exc1, exc2, exc3, exc4, exc5, exc6 }}
      onChangeCheck={name => onChangeCheck(name)}
      category={category}
      itemId={itemId}
    />
  </div>
);
