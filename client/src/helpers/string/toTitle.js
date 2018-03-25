export default str =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
    return str.toUpperCase();
  });
