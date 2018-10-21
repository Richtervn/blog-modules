import appConfig from 'app/config';
import { actionCreator } from 'helpers';
import services from './Gallery.services';

const GET_GALLERY = 'gallery/GET_GALLERY';

export const getGallery = () =>
  actionCreator(GET_GALLERY, services.getGallery, {
    transformData({ data }) {
      data = data.map(album => {
        album.images = album.images.map(image => image.replace('./public', appConfig.API_HOST));
        return album;
      });
      return data;
    }
  })();

const initialState = {
  gallery: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GALLERY}_SUCCESS`:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};
