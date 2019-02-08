import './HeaderMenu.css';
import React, { useState, useRef, useEffect } from 'react';
import MiniMusicPlayer from './components/MiniMusicPlayer.container';

export default ({ isShow, onQuickUpdateManga, onCrawlManga, onSaveNewMangaChapter, onAddAppDiary, onSelfHide }) => {
  let wrapper = useRef(null);

  const [mangaUrl, setMangaUrl] = useState('');
  const [crawlMangaUrl, setCrawlMangaUrl] = useState('');
  const [newChapterUrl, setNewChapterUrl] = useState('');
  const [appDiary, setAppDiary] = useState('');

  useEffect(() => {
    const handleSelfHide = event => {
      if (wrapper && !wrapper.contains(event.target)) {
        event.stopImmediatePropagation();
        onSelfHide();
      }
    };

    if (isShow) {
      document.addEventListener('click', handleSelfHide);
    }
    if (wrapper && !isShow) {
      document.removeEventListener('click', handleSelfHide);
    }
  }, [isShow]);

  if (!isShow) {
    return null;
  }

  return (
    <div className="header-menu-bar" ref={node => (wrapper = node)}>
      <div className="header-menu-input-wrapper">
        <input
          type="text"
          className="form-control header-menu-input"
          name="mangaUrl"
          value={mangaUrl}
          onChange={e => setMangaUrl(e.target.value)}
          placeholder="Quick update manga reading url"
        />
        <button
          className="btn btn-success header-menu-btn"
          disabled={!mangaUrl}
          onClick={() => {
            onQuickUpdateManga({ url: mangaUrl });
            setMangaUrl('');
          }}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>

      <div className="header-menu-input-wrapper-next">
        <input
          type="text"
          className="form-control header-menu-input"
          name="crawlMangaUrl"
          value={crawlMangaUrl}
          onChange={e => setCrawlMangaUrl(e.target.value)}
          placeholder="Crawl manga reading url"
        />
        <button
          className="btn btn-info header-menu-btn"
          disabled={!setCrawlMangaUrl}
          onClick={() => {
            onCrawlManga({ url: crawlMangaUrl });
            setCrawlMangaUrl('');
          }}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>

      <div className="header-menu-input-wrapper-next">
        <input
          type="text"
          className="form-control header-menu-input"
          name="newChapterUrl"
          value={newChapterUrl}
          onChange={e => setNewChapterUrl(e.target.value)}
          placeholder="Quick update manga reading url"
        />
        <button
          className="btn btn-warning header-menu-btn"
          disabled={!newChapterUrl}
          onClick={() => {
            onSaveNewMangaChapter({ url: newChapterUrl });
            setNewChapterUrl('');
          }}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>

      <div className="header-menu-input-wrapper-next">
        <input
          type="text"
          className="form-control header-menu-input"
          name="appDiary"
          value={appDiary}
          onChange={e => setAppDiary(e.target.value)}
          placeholder="Add App Diary"
        />
        <button
          className="btn btn-primary header-menu-btn"
          disabled={!appDiary}
          onClick={() => {
            onAddAppDiary({ text: appDiary });
            setAppDiary('');
          }}>
          <i className="fa fa-send-o" />
        </button>
      </div>
      <div className="header-menu-mini-player">
        <MiniMusicPlayer />
      </div>
    </div>
  );
};
