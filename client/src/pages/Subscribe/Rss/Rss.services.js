import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonPut, commonDelete } = serviceCaller;

export default {
  getProviders({ query }) {
    const data = commonGet('rss/providers', null, query);
    return data;
  },
  addProvider(formBody) {
    const data = commonPost('rss/provider', formBody);
    return data;
  },
  editProvider(formBody) {
    const data = commonPut('rss/provider', formBody);
    return data;
  },
  deleteProvider(id) {
    const data = commonDelete('rss/provider/' + id);
    return data;
  },
  getFeeds() {
    const data = commonGet('rss/feeds');
    return data;
  }
};
