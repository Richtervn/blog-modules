import Promise from 'bluebird';
import horizon from 'horizon-youtube-mp3';

const publicPath = './public/tmp/Youtube MP3';

const downloadToLocal = (url, onInfoReceived, onConvertVideoProgress) =>
  new Promise((resolve, reject) => {
    horizon.getInfo(url, (err, info) => {
      if (err) return reject(err);
      onInfoReceived(info);
      const name = `${info.videoName}.mp3`;

      horizon.downloadToLocal(
        url,
        publicPath,
        null,
        null,
        null,
        (err, result) => {
          if (err) return reject(err);
          if (result == horizon.successType.CONVERSION_FILE_COMPLETE) {
            return resolve({ url: `${publicPath}/${name}`, videoName: info.videoName, videoThumb: info.videoThumb });
          }
        },
        (percent, timemark, targetSize) => {
          onConvertVideoProgress(percent, timemark, targetSize);
        }
      );
    });
  });

export default async (url, onInfoReceived = () => {}, onConvertVideoProgress = () => {}) => {
  try {
    const result = await downloadToLocal(url, onInfoReceived, onConvertVideoProgress);
    return result;
  } catch (e) {
    return e;
  }
};
