import React from 'react';

export default ({ Name, Uri, getGame }) => {
  if (Name && !Uri) {
    getGame(Name);
    return null;
  }

  let flashUri = Uri.replace('./public', 'http://localhost:3000');

  return (
    <div className="flash-game-main-screen">
      <center style={{ paddingTop: '75px' }}>
        <embed src={flashUri} type="application/x-shockwave-flash" width="800" height="575" />
      </center>
    </div>
  );
};
