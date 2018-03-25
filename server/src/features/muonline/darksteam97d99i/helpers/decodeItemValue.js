import { Categories } from '../data/game';

const isEmptyItem = itemArr => {
  const checked = [];
  itemArr.forEach(value => {
    if (value == 255) {
      checked.push('check');
    }
  });
  if (checked.length == itemArr.length) {
    return true;
  }
  return false;
};

export default itemArr => {
  let item = {};
  if (isEmptyItem(itemArr)) {
    return null;
  }

  let firstValue = itemArr[0];
  let secondValue = itemArr[1];
  let eighthValue = itemArr[7];

  let categoryIndex = Math.trunc(firstValue / 32);
  item.itemId = firstValue % 32;

  if (eighthValue >= 128) {
    categoryIndex += 8;
    eighthValue -= 128;
  }

  let itemCategory = Categories.find(category => category._id == categoryIndex);
  item.category = itemCategory.Name;

  if (secondValue >= 128) {
    item.skill = 1;
    secondValue -= 128;
  } else {
    item.skill = 0;
  }

  if (secondValue % 8 >= 4) {
    item.luck = 1;
    secondValue -= 4;
  } else {
    item.luck = 0;
  }

  item.level = Math.trunc(secondValue / 8);
  secondValue -= item.level * 8;

  if (eighthValue >= 64) {
    item.option = 4;
    eighthValue -= 64;
  } else {
    item.option = 0;
  }

  item.option += secondValue;

  if (eighthValue >= 32) {
    item.exc1 = 1;
    eighthValue -= 32;
  } else {
    item.exc1 = 0;
  }

  if (eighthValue >= 16) {
    item.exc2 = 1;
    eighthValue -= 16;
  } else {
    item.exc2 = 0;
  }

  if (eighthValue >= 8) {
    item.exc3 = 1;
    eighthValue -= 8;
  } else {
    item.exc3 = 0;
  }

  if (eighthValue >= 4) {
    item.exc4 = 1;
    eighthValue -= 4;
  } else {
    item.exc4 = 0;
  }

  if (eighthValue >= 2) {
    item.exc5 = 1;
    eighthValue -= 2;
  } else {
    item.exc5 = 0;
  }

  if (eighthValue >= 1) {
    item.exc6 = 1;
    eighthValue -= 1;
  } else {
    item.exc6 = 0;
  }

  return item;
};
