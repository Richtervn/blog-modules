export default classCode => {
  switch (classCode.toString()) {
    case '0':
      return 'Dark Wizard';
    case '1':
      return 'Soul Master';
    case '16':
      return 'Dark Knight';
    case '17':
      return 'Blade Knight';
    case '32':
      return 'Elf';
    case '33':
      return 'Muse Elf';
    case '48':
      return 'Magic Gladiator';
    default:
      return 'undefined';
  }
};
