export default file => {
  let name = file.slice(0);
  const extensionIndex = name.lastIndexOf('.');
  return name.slice(0, extensionIndex);
}