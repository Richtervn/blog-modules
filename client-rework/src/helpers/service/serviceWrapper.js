export default func => (...params) => {
  try {
    const result = func(...params);
    return result;
  } catch (e) {
    return e;
  }
};
