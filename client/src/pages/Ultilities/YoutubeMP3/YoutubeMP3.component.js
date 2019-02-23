import './YoutubeMP3.css';
import React, { useState } from 'react';

import PageContainer from 'common/PageContainer';

export default ({ isUploading, fileUrl, videoThumb, videoName, onDownloadMP3, onGetDownloadedMP3 }) => {
  const [url, setUrl] = useState('');

  return (
    <PageContainer backgroundUrl="/images/backgrounds/youtube.jpg" opacity={7}>
      <div id="youtube-mp3-page">
        <div className="form-container">
          {!videoName && (
            <form
              className="youtube-mp3-form"
              onSubmit={async e => {
                e.preventDefault();
                if (!url) return;
                onDownloadMP3({ url });
              }}>
              <input
                className="form-control"
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="Youtube URL"
                disabled={isUploading}
              />
              <button type="submit" className="btn btn-success" disabled={isUploading}>
                {isUploading && (
                  <span>
                    <i className="fa fa-spinner fa-spin" />
                    &nbsp;
                  </span>
                )}
                Download
              </button>
            </form>
          )}
          {videoName && (
            <div className="youtube-mp3-info">
              <div className="info">
                <img src={videoThumb} alt={videoName} />
                <div className="label">{videoName}</div>
              </div>
              <div className="actions">
                <button
                  className="btn btn-success"
                  onClick={() => onGetDownloadedMP3({ fileName: encodeURIComponent(videoName), action: 'download' })}>
                  Download
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onGetDownloadedMP3({ fileName: encodeURIComponent(videoName), action: 'remove' })}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
