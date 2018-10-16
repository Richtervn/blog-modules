export default (Name, isArray) => {
  const errorMessage = `!Missing ${Name}`;
  if (isArray) {
    return { validator: arr => arr && arr.length > 0, message: errorMessage };
  }
  return [true, errorMessage];
};
