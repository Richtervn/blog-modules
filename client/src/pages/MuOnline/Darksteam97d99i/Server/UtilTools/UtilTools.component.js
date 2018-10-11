import './UtilTools.css';
import React, { Component } from 'react';

import services from '../../Darksteam97d99i.services';

import { downloadFile } from 'helpers';

class UtilTools extends Component {
  async generateMonsterFile() {
    const { file } = await services.generateMonsterFile();
    downloadFile(file, 'monster.txt');
  }

  async generateItemFile() {
    const { file } = await services.generateItemFile();
    downloadFile(file, 'item.txt');
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
      </div>
    );
  }
}

export default UtilTools;
