import { connect } from 'react-redux';
import MangaNews from './MangaNews.component';

import { getMangaNews } from '../Subscribe.module';

export default connect(
  ({ subscribe }) => ({
    news: subscribe.mangaNews
  }),
  dispatch => ({
    onGetNews() {
      dispatch(getMangaNews());
    }
  })
)(MangaNews);
