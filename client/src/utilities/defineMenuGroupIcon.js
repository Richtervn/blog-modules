export default name => {
  let groupIcon = 'fa-gamepad';
  switch (name) {
    case 'Games':
      return 'fa-gamepad';
    case 'Collections':
      return 'fa-book';
    case 'Information':
      return 'fa-info-circle';
    case 'Education':
      return 'fa-graduation-cap';
    case 'Experience':
      return 'fa-calendar-check-o';
    case 'Career':
      return 'fa-briefcase';
    case 'Skills':
      return 'fa-coffee';
    case 'Notes':
      return 'fa-tags';
    case 'Tools':
      return 'fa-wrench';
    default:
      return groupIcon;
  }
};
