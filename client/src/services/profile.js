import serviceCaller from 'factories/serviceCaller';

const { commonGet } = serviceCaller;

export default {
  getMenu() {
    const menu = commonGet('profile/get_menu');
    return menu;
  }
};
