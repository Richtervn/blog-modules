import { serviceCaller } from 'helpers';

const { commonGet, commonPost } = serviceCaller;

export default {
  getLogs() {
    const data = commonGet('app_diary');
    return data;
  },
  addLog({ formBody }) {
    const data = commonPost('app_diary', formBody);
    return data;
  }
};
