import { serviceCaller } from 'helpers';

const { commonGet } = serviceCaller;

export default {
  getMenuTree() {
    const menu = commonGet('system/get_menu');
    return menu;
  }
};
