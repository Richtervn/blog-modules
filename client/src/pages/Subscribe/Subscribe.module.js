import { actionCreator } from 'helpers';
import services from './Subscribe.services';

const GET_MANGA_NEWS = 'subscribe/GET_MANGA_NEWS';

export const getMangaNews = () => actionCreator(GET_MANGA_NEWS, services.getMangaNews)();

const initialState = {
  mangaNews: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MANGA_NEWS}_SUCCESS`:
      return { ...state, mangaNews: action.payload };
    default:
      return state;
  }
};
