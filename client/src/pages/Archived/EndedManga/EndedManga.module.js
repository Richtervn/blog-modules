import { GET_MANGAS } from 'pages/Collections/MangasReading';

const initialState = {
  mangas: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MANGAS}_SUCCESS`: {
      const endedMangas = action.payload.filter(manga => manga.Chapter.indexOf(' - END') !== -1);
      return { ...state, mangas: endedMangas };
    }
    default:
      return state;
  }
};
