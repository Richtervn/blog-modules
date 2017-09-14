import React from 'react';
import FormModal from 'components/FormModal';

import ToolsBar from './ToolsBar';
import HoverableTable from './HoverableTable';

export default ({
  songsList,
  addSongForm,
  onAddSongSubmit,
  onAddPlaylist,
  sort,
  onSortSongList,
  onSearchInput
}) => (
  <div className="static-position">
    <div className="box-margin static-position">
      <ToolsBar onSearchInput={onSearchInput} />
    </div>
    <div className="music-list-songs-box">
      <HoverableTable
        headers={['Artist', 'Name', 'Rating', 'Genre']}
        data={songsList}
        onSelect={onAddPlaylist}
        sort={sort}
        onSort={onSortSongList}
      />
    </div>
    <FormModal id="addMusicModal" formBody={addSongForm} onSubmit={onAddSongSubmit} />
  </div>
);
