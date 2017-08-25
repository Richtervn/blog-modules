export default name => {
  let groupIcon = 'fa-gamepad';
  switch (name) {
    case 'Games':
      return 'fa-gamepad';
    case 'Collections':
      return 'fa-book';
    default:
      return groupIcon;
  }
};
