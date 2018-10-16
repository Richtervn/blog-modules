import { serviceCaller } from 'helpers';

const { commonGet } = serviceCaller;

export default {
  getMangaNews() {
    const data = commonGet('manga_news');
    return data;
  }
};
