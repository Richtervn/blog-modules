export default (url, fileName) => {
  const aTag = document.createElement('a');
  aTag.setAttribute('href', url);
  aTag.setAttribute('target', '_blank');
  aTag.setAttribute('download', fileName);
  aTag.style.display = 'none';
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};
