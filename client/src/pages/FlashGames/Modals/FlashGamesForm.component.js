import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea } from 'components/FormTools';
import { commonFormChange, connectString } from 'helpers';
import { hideModal } from 'common/Modal';

const FlashGamesForm = ({ edit, game, onAddGame, onEditGame, history }) => {
  const [value, setValue] = useState({
    Name: '',
    File: null,
    Width: 0,
    Height: 0,
    Guide: ''
  });
  useEffect(() => {
    if (edit) {
      setValue({
        Name: game.Name,
        Width: game.Width || 0,
        Height: game.Height || 0,
        Guide: game.Guide || '',
        File: null
      });
    }
  }, [game]);

  const handleChange = e => {
    const valueState = commonFormChange(value, e);
    setValue(valueState);
  };

  const { Name, Width, Height, Guide } = value;

  return [
    <ModalHeader
      key="fg_h"
      iconUrl="/images/icons/gamepad.png"
      label={edit ? `Edit ${game.Name}` : 'Add Flash Game'}
    />,
    <div key="fg_b" className="modal-body">
      <form className="text-right">
        <FormGroupRow type="file" name="File" onChange={e => handleChange(e)} label="SWF File" />
        <FormGroupRow type="text" name="Name" onChange={e => handleChange(e)} label="Name" value={Name} />
        <FormGroupRow type="number" name="Width" onChange={e => handleChange(e)} label="Width" value={Width} />
        <FormGroupRow type="number" name="Height" onChange={e => handleChange(e)} label="Height" value={Height} />
        <FormGroupArea name="Guide" onChange={e => handleChange(e)} label="Guide" value={Guide} />
      </form>
    </div>,
    <ModalFooter
      key="fg_f"
      onClickSubmit={() => {
        edit
          ? onEditGame({ ...value, _id: game._id }, () => {
              if (value.Name !== game.Name) {
                history.push(`/flash_game/${connectString(value.Name, ' ', '_')}`);
              }
            })
          : onAddGame(value);
        hideModal();
      }}
    />
  ];
};

export default withRouter(FlashGamesForm);
