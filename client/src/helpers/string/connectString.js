export default (srcString, seperator = ' ', connectSeperator = '-') => {
  return srcString
    .toLowerCase()
    .split(seperator)
    .join(connectSeperator);
};
