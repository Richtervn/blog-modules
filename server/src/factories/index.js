import clearExtension from './string/clearExtension';
import pad from './string/pad';
import toTitleCase from './string/toTitleCase';

import commonService from './commonServices/mongoose';
import jsonReader from './commonServices/jsonReader';
import commonSequelize from './commonServices/sequelize';

import readMuServerFile from './mu/readMuServerFile';

import convertUnixTimestamp from './time/convertUnixTimestamp';
import increaseUnixDay from './time/increaseUnixDay';
import makeSmallDateTime from './time/makeSmallDateTime';
import makeSnoNumber from './time/makeSnoNumber';
import readSnoNumber from './time/readSnoNumber';

import deleteFile from './utils/deleteFile';
import emitToClient from './utils/emitToClient';
import findSocket from './utils/findSocket';
import readFile from './utils/readFile';
import writeFile from './utils/writeFile';
import wrap from './utils/wrap';

const factories = () => ({
  toTitleCase,
  pad,
  clearExtension,
  commonService,
  jsonReader,
  commonSequelize,
  readMuServerFile,
  convertUnixTimestamp,
  increaseUnixDay,
  makeSmallDateTime,
  makeSnoNumber,
  readSnoNumber,
  deleteFile,
  emitToClient,
  findSocket,
  readFile,
  wrap,
  writeFile
});

export default {
  name: 'App Factory',
  description: 'Provide Functions',
  services: {
    factories: {
      require: [],
      func: factories
    }
  },
  exports: ['factories']
};
