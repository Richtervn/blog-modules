import getSimpleName from './getSimpleName';

const getFullName = (stringKey, seperator = '_') => {
  const stringFrags = stringKey.split(seperator);
  const nameFrags = stringFrags.map(frag => getSimpleName(frag));
  const fullName = nameFrags.join(' ');
  return fullName;
};

export default getFullName;
