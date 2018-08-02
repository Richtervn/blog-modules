import { serviceCaller } from 'helpers';

const { commonGet, commonPostMultiplePart, commonPutMultiplePart, commonPost } = serviceCaller;

export default {
  add({ formBody }) {
    const data = commonPostMultiplePart('account', formBody);
    return data;
  },
  edit({ formBody }) {
    const data = commonPutMultiplePart('account', formBody);
    return data;
  },
  search({ query }) {
    const data = commonGet('account/search', null, query);
    return data;
  },
  getAll() {
    const data = commonGet('account');
    return data;
  },
  verify({ formBody }) {
    const data = commonPost('account/verify', formBody);
    return data;
  }
};
