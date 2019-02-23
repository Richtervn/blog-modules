import { connect } from 'react-redux';
import YoutubeMP3 from './YoutubeMP3.component';

import { downloadMP3, getDownloadedMP3 } from './YoutubeMP3.module';

export default connect(
  ({ youtubeMP3 }) => ({
    isUploading: youtubeMP3.isUploading,
    fileUrl: youtubeMP3.fileUrl,
    videoThumb: youtubeMP3.videoThumb,
    videoName: youtubeMP3.videoName
  }),
  dispatch => ({
    onDownloadMP3(formBody) {
      dispatch(downloadMP3(formBody));
    },
    onGetDownloadedMP3(query) {
      dispatch(getDownloadedMP3(query));
    }
  })
)(YoutubeMP3);
