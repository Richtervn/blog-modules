import { actionCreator } from 'helpers';
import services from './YoutubeMP3.services';

const DOWNLOAD_MP3 = 'youtubeMP3/DOWNLOAD_MP3';
const GET_DOWNLOADED_MP3 = 'youtubeMP3/GET_DOWNLOADED_MP3';

export const downloadMP3 = formBody => actionCreator(DOWNLOAD_MP3, services.downloadMP3, { payload: formBody })();
export const getDownloadedMP3 = query =>
  actionCreator(GET_DOWNLOADED_MP3, services.getDownloadedMP3, { payload: query })();

const initialState = {
  isUploading: false,
  fileUrl: '',
  videoThumb: '',
  videoName: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${DOWNLOAD_MP3}_START`:
      return { ...state, isUploading: true };
    case `${DOWNLOAD_MP3}_SUCCESS`:
      return { ...state, isUploading: false, ...action.payload };
    case `${DOWNLOAD_MP3}_FAIL`:
      return { ...state, isUploading: false };
    case `${GET_DOWNLOADED_MP3}_START`:
      return { ...state, fileUrl: '', videoName: '', videoThumb: '' };
    default:
      return state;
  }
};
