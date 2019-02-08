import './HeaderMenu.css';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { validators } from 'helpers/form';

import MiniMusicPlayer from './components/MiniMusicPlayer.container';

const HeaderRowForm = ({
  onSubmit,
  value,
  onChange,
  validator,
  placeholder,
  buttonClass,
  iconClass = 'fa-plus-circle',
  disabled
}) => {
  const [error, setError] = useState(false);
  const [changed, setChanged] = useState(false);

  return (
    <form
      className="header-menu-input-wrapper"
      onSubmit={e => {
        e.preventDefault();
        if (!error) {
          onSubmit();
        }
      }}>
      <input
        type="text"
        className={classnames('form-control header-menu-input', { 'is-valid': changed && !error, 'is-invalid': error })}
        value={value}
        onChange={e => {
          if (!changed) {
            setChanged(true);
          } else {
            if (!validator) {
              return;
            }
            const isValid = validator(e.target.value);
            if (!isValid !== error) {
              setError(!isValid);
            }
          }
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
      <button className={classnames('btn', buttonClass, 'header-menu-btn')} disabled={disabled} type="submit">
        <i className={classnames('fa', iconClass)} />
      </button>
    </form>
  );
};

export default ({ isShow, onQuickUpdateManga, onCrawlManga, onSaveNewMangaChapter, onAddAppDiary, onSelfHide }) => {
  let wrapper;

  const [mangaUrl, setMangaUrl] = useState('');
  const [crawlMangaUrl, setCrawlMangaUrl] = useState('');
  const [newChapterUrl, setNewChapterUrl] = useState('');
  const [appDiary, setAppDiary] = useState('');

  const handleSelfHide = event => {
    if (wrapper && !wrapper.contains(event.target)) {
      event.stopImmediatePropagation();
      onSelfHide();
    }
  };

  useEffect(() => {
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
      <HeaderRowForm
        value={mangaUrl}
        disabled={!mangaUrl}
        placeholder="Quick update manga reading url"
        buttonClass="btn-success"
        onChange={v => setMangaUrl(v)}
        validator={v => validators.url(v)}
        onSubmit={() => {
          onQuickUpdateManga({ url: mangaUrl });
          setMangaUrl('');
        }}
      />
      <HeaderRowForm
        value={crawlMangaUrl}
        disabled={!crawlMangaUrl}
        placeholder="Crawl manga url"
        buttonClass="btn-info"
        onChange={v => setCrawlMangaUrl(v)}
        onSubmit={() => {
          onCrawlManga({ url: crawlMangaUrl });
          setCrawlMangaUrl('');
        }}
      />
      <HeaderRowForm
        value={newChapterUrl}
        disabled={!newChapterUrl}
        placeholder="New manga's chapter url"
        buttonClass="btn-warning"
        onChange={v => setNewChapterUrl(v)}
        validator={v => validators.url(v)}
        onSubmit={() => {
          onSaveNewMangaChapter({ url: newChapterUrl });
          setNewChapterUrl('');
        }}
      />
      <HeaderRowForm
        value={appDiary}
        disabled={!appDiary}
        placeholder="Add app diary"
        buttonClass="btn-primary "
        iconClass="fa-send-o"
        onChange={v => setAppDiary(v)}
        validator={v => v && v !== ''}
        onSubmit={() => {
          onAddAppDiary({ text: appDiary });
          setAppDiary('');
        }}
      />
      <div className="header-menu-mini-player">
        <MiniMusicPlayer />
      </div>
    </div>
  );
};
