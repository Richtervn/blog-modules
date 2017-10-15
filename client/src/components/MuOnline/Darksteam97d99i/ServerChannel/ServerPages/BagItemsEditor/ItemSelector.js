import React from 'react';
import _ from 'underscore';

const defineItemName = (category, item, itemLvl) => {
  if (category == 'Misc' && parseInt(item._id) == 11) {
    switch (parseInt(itemLvl)) {
      case 1:
        return 'Star of Xmas';
      case 2:
        return 'Firecracker';
      case 3:
        return 'Heart of Love';
      case 5:
        return 'Silver Medal';
      case 6:
        return 'Gold Medal';
      case 7:
        return 'Box of Heaven';
      case 8:
        return 'Box of Kundun +1';
      case 9:
        return 'Box of Kundun +2';
      case 10:
        return 'Box of Kundun +3';
      case 11:
        return 'Box of Kundun +4';
      case 12:
        return 'Box of Kundun +5';
      case 13:
        return 'Heart of Darklord';
    }
  }
  return item.Name;
};

const defineItemImage = (category, itemId, itemLvl) => {
  if (category == 'Misc' && parseInt(itemId) == 11) {
    if (_.contains([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], parseInt(itemLvl))) {
      return `/app_modules/images/muonline/item/${category}/${itemId}-${itemLvl}.gif`;
    }
  }
  return `/app_modules/images/muonline/item/${category}/${itemId}.gif`;
};

export default ({ data, onGetData, onSelectCategory, category, onSelectItem, itemId, itemLvl }) => {
  if (!data.Categories) {
    onGetData('Categories');
    return null;
  }

  if (category && !data[category]) {
    onGetData(category);
    return null;
  }

  return (
    <div className="text-center">
      <select className="ds9799-form-selector" onChange={onSelectCategory} defaultValue={category}>
        {data.Categories.map((category, i) => (
          <option key={i} value={category.Name}>
            {category.Name}
          </option>
        ))}
      </select>
      {category && (
        <div>
          <select className="ds9799-form-selector" onChange={onSelectItem} defaultValue={itemId}>
            {data[category].map((item, i) => (
              <option key={i} value={item._id}>
                {defineItemName(category, item, itemLvl)}
              </option>
            ))}
          </select>
          <img src={defineItemImage(category,itemId,itemLvl)}/>
        </div>
      )}
    </div>
  );
};
