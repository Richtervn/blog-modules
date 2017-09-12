import _ from 'underscore';

export default (state, event, index, arrays, filesArr) => {
  const formValue = state;
  const { name, value, files } = event.target;

  let valueName = name;
  if(arrays && _.contains(arrays, name)){
    valueName = 'InArray';
  }
  if(filesArr && _.contains(filesArr, name)){
    valueName = 'InFiles';
  }

  switch (valueName) {
    case 'File':
      formValue[name] = files[0];
      break;
    case 'InArray':
      formValue[name][index] = value;
      break;
    case 'InFiles':
      formValue[name] = files[0];
      break;
    default:
      formValue[name] = value;
      break;
  }
  return formValue;
};
