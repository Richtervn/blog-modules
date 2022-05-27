export const toTitleCase = srcString =>
  srcString.charAt(0).toUpperCase() + srcString.slice(1, srcString.length).toLowerCase();

export const urlToAka = (urlFrag, options = {}) => {
  const frags = urlFrag.split(/-|_/).map(frag => toTitleCase(frag));
  return frags.join(' ');
};

export const getDomainName = url => {
  const urlInfo = new URL(url);
  return urlInfo.origin.replace('www.', '');
};
