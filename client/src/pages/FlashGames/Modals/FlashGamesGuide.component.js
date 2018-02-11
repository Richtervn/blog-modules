import React from 'react';
import { ModalHeader } from 'components/Modal';

export default ({ game }) => [
  <ModalHeader key="fg_gh" iconUrl="/images/icons/gamepad.png" label={`${game.Name} Guide`} />,
  <div key="fg_gb" className="modal-body">
    {!game.Guide && (
      <p>
        <i>{`No available guide for ${game.Name}`}</i>
      </p>
    )}
    {game.Guide && (
      <div className="flash-game-guide">
        <div dangerouslySetInnerHTML={{ __html: game.Guide }} />
      </div>
    )}
  </div>
];
