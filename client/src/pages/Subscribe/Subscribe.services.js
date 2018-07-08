import { serviceCaller } from 'helpers';

const { commonGet } = serviceCaller;

export default {
  getMangaNews() {
    const data = commonGet('subscribe/manga');
    return data;
  }
};
