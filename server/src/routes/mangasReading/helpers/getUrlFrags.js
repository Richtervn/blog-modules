export default url =>
  url
    .replace('http://', '')
    .replace('https://', '')
    .replace('.html', '')
    .replace('www.', '')
    .split('/');
