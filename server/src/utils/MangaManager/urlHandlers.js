export const stripLastPath =
  (pathnameIndex, separator = '-') =>
  urlString => {
    const url = new URL(urlString);
    url.pathname = url.pathname
      .split('/')
      .filter((__, i) => i <= pathnameIndex)
      .map((frag, index) => {
        if (index === pathnameIndex) {
          const pathnameFrag = frag.split(separator);
          pathnameFrag.pop();
          return pathnameFrag.join(separator);
        }
        return frag;
      })
      .join('/');
    return url.toString();
  };

export const sliceToIndex = pathnameIndex => urlString => {
  const url = new URL(urlString);
  url.pathname = url.pathname
    .split('/')
    .filter((__, i) => i <= pathnameIndex)
    .join('/');
  return url.toString();
};
