export default (formState, name, initialMemberValues = '') => {
  formState[name].push(initialMemberValues);
  return formState;
};
