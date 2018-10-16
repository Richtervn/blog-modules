export default (value, required, requiredArray) => {
  const error = {};
  required.forEach(field => {
    if (!value[field]) {
      error[field] = true;
    }
  });
  requiredArray.forEach(field => {
    if (!value[field] || !value[field][0]) {
      error[field] = true;
    }
  });
  return error;
};
