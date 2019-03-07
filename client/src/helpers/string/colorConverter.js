export default {
  hexToRgba(hex, alpha) {
    let r, g, b;
    if (hex.length > 4) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    } else {
      r = parseInt(hex.slice(1, 2), 16);
      g = parseInt(hex.slice(2, 3), 16);
      b = parseInt(hex.slice(3, 4), 16);
    }

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }
};
