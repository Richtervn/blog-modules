import { serviceCaller } from 'helpers';

const { commonGet, commonPost } = serviceCaller;

export default {
  getMenuTree() {
    const menu = commonGet('system/get_menu');
    return menu;
  },
  saveMenuTree(formBody) {
    const menu = commonPost('system/save_menu', formBody);
    return menu;
  }
};
