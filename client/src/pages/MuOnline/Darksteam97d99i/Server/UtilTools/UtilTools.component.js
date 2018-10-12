import './UtilTools.css';
import React, { Component } from 'react';

import { toastSuccess } from 'common/Toast';
import services from '../../Darksteam97d99i.services';

import { downloadFile } from 'helpers';
import { UploadButton } from 'components/FormTools';

class UtilTools extends Component {
  async generateMonsterFile() {
    const { file } = await services.generateMonsterFile();
    downloadFile(file, 'monster.txt');
  }

  async generateItemFile() {
    const { file } = await services.generateItemFile();
    downloadFile(file, 'item.txt');
  }

  async syncMonsters(file) {
    await services.syncMonsters({ formBody: { file } });
    toastSuccess('Monsters sync done!');
  }

  async syncItems(file) {
    await services.syncItems({ formBody: { file } });
    toastSuccess('Items sync done!');
  }

  async readEventItemBagFile(file) {
    const response = await services.readEventItemBagFile({ formBody: { file } });
    downloadFile(response.file, response.name);
  }

  render() {
    return (
      <div id="ds9799-server-utils">
        <div className="item-wrapper">
          <div className="item">
            <button className="btn btn-primary btn-block" onClick={() => this.generateItemFile()}>
              Generate Server Item File
            </button>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <button className="btn btn-primary btn-block" onClick={() => this.generateMonsterFile()}>
              Generate Server Monster File
            </button>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <UploadButton className="btn btn-primary btn-block" onChange={file => this.syncMonsters(file)}>
              Sync Monsters
            </UploadButton>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <UploadButton className="btn btn-primary btn-block" onChange={file => this.syncItems(file)}>
              Sync Items
            </UploadButton>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <UploadButton className="btn btn-primary btn-block" onChange={file => this.readEventItemBagFile(file)}>
              Read Event Item Bag
            </UploadButton>
          </div>
        </div>
      </div>
    );
  }
}

export default UtilTools;
