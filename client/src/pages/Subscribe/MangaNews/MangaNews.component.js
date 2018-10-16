import './MangaNews.css';
import React, { Component } from 'react';
import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

class MangaNews extends Component {
  componentWillMount() {
    const { news, onGetNews } = this.props;
    if (!news) {
      onGetNews();
    }
  }

  render() {
    const { news } = this.props;
    if (!news) {
      return <PageLoader />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/dark_art.jpg">
        <div id="manga-news" className="row">
          {news.map(siteData => (
            <section className="site-block" key={siteData.site}>
              <h1>New mangas on site {siteData.site}</h1>
              <div className="manga-list">
                {siteData.data.map((manga, i) => (
                  <figure key={i}>
                    <div className="manga-new-card">
                      <a className="img-wrap" href={manga.link} rel="noopener noreferrer" target="_blank">
                        <img src={manga.image} alt={manga.name} />
                      </a>
                      <div className="content">
                        <a href={manga.link} className="manga-name">
                          {manga.name}
                        </a>
                        <div className="list-chapters">
                          {manga.chapters.map((chapter, j) => (
                            <a
                              key={j}
                              className="badge badge-info"
                              href={chapter.link}
                              rel="noopener noreferrer"
                              target="_blank">
                              {chapter.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageContainer>
    );
  }
}

export default MangaNews;
