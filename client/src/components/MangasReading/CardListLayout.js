import React from "react";
import MangaCard from "./MangaCard";

import arraySplitter from "factories/arraySplitter";

export default ({ mangas, focusMangaId, onSelectManga }) => {
  if(mangas.length == 0) return null;
  const originalMangas = mangas.slice(0)
  const mangasChunks = arraySplitter(originalMangas, 3);

  return (
    <div>
      {mangasChunks.map((mangaChunk, row) => (
        <div key={row}>
          <div className="row no-row-margin static-position">
            {mangaChunk.map((manga, i) => {
              if (!manga.Name) {
                return (
                  <div className="col no-col-margin static-position" key={i} />
                );
              }
              return (
                <div className="col no-col-margin static-position" key={i}>
                  <MangaCard manga={manga} onSelectManga={onSelectManga} isFocus={focusMangaId == manga._id}/>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};
