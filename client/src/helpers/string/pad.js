export default (str, char, pos, text) => {
  let result = str;
  while (result.length < pos - 1) {
    result += char;
  }
  result += text;
  return result;
};
