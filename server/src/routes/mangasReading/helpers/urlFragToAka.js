import toTitleCase from './toTitleCase';

export default urlFrag =>
  urlFrag
    .split('-')
    .map(frag => toTitleCase(frag))
    .join(' ');
