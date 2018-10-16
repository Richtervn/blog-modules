import { connect } from 'react-redux';
import MangaNews from './MangaNews.component';

import { getMangaNews } from './MangaNews.module';

export default connect(
  ({ mangaNews }) => ({
    news: mangaNews.mangaNews
  }),
  dispatch => ({
    onGetNews() {
      dispatch(getMangaNews());
    }
  })
)(MangaNews);
