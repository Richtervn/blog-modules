import React from 'react';
import FormModal from 'components/FormModal';

import ToolsBar from './ToolsBar';
import HoverableTable from './HoverableTable';

export default ({ songsList, addSongForm, onAddSongSubmit }) => (
  <div className="static-position">
    <div className="box-margin static-position">
      <ToolsBar />
    </div>
    <div className="music-list-songs-box">
      <HoverableTable headers={['Artist', 'Name', 'Rating', 'Genre']} data={songsList} />
    </div>
    <FormModal id="addMusicModal" formBody={addSongForm} onSubmit={onAddSongSubmit} />
  </div>
);
