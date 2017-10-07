import React from 'react';

export default ({ data, onGetData, onSelectCategory, category, onSelectItem, itemId }) => {
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
              {item.Name}
            </option>
          ))}
        </select>
        <img src={`/app_modules/images/muonline/item/${category}/${itemId}.gif`}/>
        </div>
      )}
    </div>
  );
};
