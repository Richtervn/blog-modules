import './Gallery.css';
import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';
import Lightbox from 'lightbox-react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumName: '',
      images: [],
      photoIndex: 0,
      isOpen: false
    };
  }

  componentWillMount() {
    this.props.onGetGallery();
  }

  render() {
    const { gallery } = this.props;
    if (!gallery) {
      return <PageLoader />;
    }
    const { isOpen, photoIndex, images, albumName } = this.state;
    return (
      <PageContainer backgroundUrl="/images/backgrounds/gallery.jpg" opacity={5}>
        <div id="gallery-page">
          {gallery.length < 1 && (
            <div className="no-galleries-wrapper">
              <div className="no-galleries">No galleries available</div>
            </div>
          )}
          {gallery.map(album => (
            <div
              className="album-wrapper"
              key={album.album}
              onClick={() =>
                this.setState({ isOpen: true, photoIndex: 0, images: album.images, albumName: album.album })
              }>
              <div className="album" style={{ backgroundImage: `url("${album.images[0]}")` }}>
                <div className="info">
                  <div className="name">{album.album}</div>
                  <div className="images">Images: {album.images.length}</div>
                </div>
              </div>
            </div>
          ))}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={
                <div className="gallery-image-title">
                  {albumName}:&nbsp;{photoIndex + 1}/{images.length}
                </div>
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </div>
      </PageContainer>
    );
  }
}
