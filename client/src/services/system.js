import serviceCaller from 'factories/serviceCaller';

const { commonGet } = serviceCaller;

export default {
  getMenu() {
    const menu = commonGet('system/get_menu');
    return menu;
  }
};
