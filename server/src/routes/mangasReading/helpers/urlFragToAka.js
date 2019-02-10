import toTitleCase from './toTitleCase';

export default urlFrag =>
  urlFrag
    .split(/-|_/)
    .map(frag => toTitleCase(frag))
    .join(' ');
