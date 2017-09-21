import React from 'react';
// import ControlPannel from './ControlPannel';
// import CardListLayout from './CardListLayout';

export default ({
  games,
  focusGame,
  activeTool,
  viewChannel,
  onChangeChannel,
  onChangeActiveTool,
  onAddSubmit,
  onEditSubmit,
  onDeleteSubmit,
  onSearchInput,
  onSortSelect,
  onGetAllGames,
  onSelectGame
}) => {
    if (!games) {
      onGetAllGames();
      return null;
    }
  return (
    <div className="mangas-reading-main-screen">
      <div className="row no-row-margin">
        <div className="col-3 static-position no-row-margin" />
        <div className="col-9 static-position no-row-margin mr-card-list" />
      </div>
    </div>
  );

  //   return (
  //     <div className="mangas-reading-main-screen">
  //       <div className="row no-row-margin">
  //         <div className="col-3 static-position no-row-margin">
  //           <ControlPannel
  //             activeTool={activeTool}
  //             viewChannel={viewChannel}
  //             onChangeChannel={onChangeChannel}
  //             onChangeActiveTool={onChangeActiveTool}
  //             focusManga={focusManga}
  //             onAddSubmit={onAddSubmit}
  //             onQuickUpdate={onQuickUpdate}
  //             onEditSubmit={onEditSubmit}
  //             onDeleteSubmit={onDeleteSubmit}
  //             onSearchInput={onSearchInput}
  //             onSortSelect={onSortSelect}
  //           />
  //         </div>
  //         <div className="col-9 static-position no-row-margin mr-card-list">
  //           <CardListLayout mangas={mangas} focusMangaId={focusManga._id} onSelectManga={onSelectManga} />
  //         </div>
  //       </div>
  //     </div>
  //   );
};
