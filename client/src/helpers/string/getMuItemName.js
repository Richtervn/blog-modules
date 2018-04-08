export default (category, item, itemLvl) => {
  if (category === 'Misc') {
    const itemId = parseInt(item._id, 10);
    if (itemId === 11) {
      switch (parseInt(itemLvl, 10)) {
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
        default:
          return item.Name;
      }
    }
    if (itemId === 12) {
      switch (parseInt(itemLvl, 10)) {
        case 1:
          return 'Heart';
        default:
          return 'Zen';
      }
    }
  }
  return item.Name;
};
