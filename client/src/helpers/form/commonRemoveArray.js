export default (formState, name, index) => {
  formState[name].splice(index, 1);
  return formState;
};
