import React from "react";
import GameCard from "./GameCard";

import arraySplitter from "factories/arraySplitter";

export default ({ games, focusGameId, onSelectGame }) => {
  if(games.length == 0) return null;
  const originalGames = games.slice(0)
  const gamesChunks = arraySplitter(originalGames, 3);

  return (
    <div>
      {gamesChunks.map((gameChunk, row) => (
        <div key={row}>
          <div className="row no-row-margin static-position">
            {gameChunk.map((game, i) => {
              if (!game.Name) {
                return (
                  <div className="col no-col-margin static-position" key={i} />
                );
              }
              return (
                <div className="col no-col-margin static-position" key={i}>
                  <GameCard game={game} onSelectGame={onSelectGame} isFocus={focusGameId == game._id}/>
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
