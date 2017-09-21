import serviceCaller from 'factories/serviceCaller';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonPut, commonDelete } = serviceCaller;

export default {
  add(formBody) {
    const data = commonPostMultiplePart('gaming_history/add_manga', formBody);
    return data;
  },
  getAll() {
    const data = commonGet('gaming_history/get_all');
    return data;
  },
  edit(formBody) {
    const data = commonPutMultiplePart('gaming_history/update', formBody);
    return data;
  },
  delete(id) {
    const data = commonDelete('gaming_history/remove/' + id);
    return data;
  },
  search(query) {
    const data = commonGet('gaming_history/search', null, query);
    return data;
  }
};
