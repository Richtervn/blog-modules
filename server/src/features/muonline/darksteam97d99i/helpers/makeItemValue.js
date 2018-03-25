import { Categories } from '../data/game';

export default item => {
  const indexes = {};

  Categories.map(category => (indexes[category.Name] = category._id));

  const itemArr = [];
  const baseIndex = (indexes[item.category] % 8) * 32;

  const firstValue = parseInt(baseIndex) + parseInt(item.itemId);

  itemArr.push(firstValue);

  let eighthValue = indexes[item.category] / 8 < 1 ? 0 : 128;
  let secondValue = item.level * 8;

  if (item.skill == 1) secondValue += 128;
  if (item.luck == 1) secondValue += 4;

  if (item.exc1 == 1) eighthValue += 32;
  if (item.exc2 == 1) eighthValue += 16;
  if (item.exc3 == 1) eighthValue += 8;
  if (item.exc4 == 1) eighthValue += 4;
  if (item.exc5 == 1) eighthValue += 2;
  if (item.exc6 == 1) eighthValue += 1;

  if (item.option > 0) {
    if (item.option <= 4) {
      secondValue += item.option * 1;
    } else {
      secondValue += (item.option - 4) * 1;
      eighthValue += 64;
    }
  }

  itemArr.push(secondValue);
  itemArr.push(255);
  itemArr.push(0);
  itemArr.push(0);
  itemArr.push(0);
  itemArr.push(0);
  itemArr.push(eighthValue);
  itemArr.push(Math.floor(Math.random() * 255));
  itemArr.push(Math.floor(Math.random() * 255));

  return itemArr;
};
