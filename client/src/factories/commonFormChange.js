export default (state, event) => {
  const formValue = state;
  const { name, value, files } = event.target;
  switch (event.target.name) {
    case 'File':
      formValue[name] = files[0];
      break;
    default:
      formValue[name] = value;
      break;
  }
  return formValue;
};
