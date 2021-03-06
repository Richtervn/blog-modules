import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonPut, commonPost, commonDelete } = serviceCaller;

export default {
  add({ formBody }) {
    const data = commonPostMultiplePart('mangas_reading/add_manga', formBody);
    return data;
  },
  getMangas() {
    const data = commonGet('mangas_reading/get_all');
    return data;
  },
  quickUpdate({ url }) {
    const data = commonPut('mangas_reading/quick_update', url);
    return data;
  },
  edit({ formBody }) {
    const data = commonPutMultiplePart('mangas_reading/update', formBody);
    return data;
  },
  delete({ id }) {
    const data = commonDelete('mangas_reading/remove/' + id);
    return data;
  },
  search({ query }) {
    const data = commonGet('mangas_reading/search', null, query);
    return data;
  },
  sort({ query }) {
    const data = commonGet('mangas_reading/sort', null, query);
    return data;
  },
  crawl({ formBody }) {
    const data = commonPost('mangas_reading/crawl', formBody);
    return data;
  },
  manualSaveNewChapter({ url }) {
    const data = commonPut('mangas_reading/manual_save_new_chapter', url);
    return data;
  },
  confirmUnsavedMangas({ formBody }) {
    const data = commonPost('mangas_reading/confirm_unsaved', formBody);
    return data;
  }
};
