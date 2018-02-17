const getSimpleName = stringKey => {
  return stringKey.charAt(0).toUpperCase() + stringKey.slice(1, stringKey.length);
};

export default getSimpleName;
