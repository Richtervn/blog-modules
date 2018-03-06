import clearExtension from './clearExtension';
import commonService from './commonService';
import jsonReader from './jsonReader';
import multerUploader from './multerUploader';
import readFile from './readFile';
import writeFile from './writeFile';
import wrap from './wrap';

const factories = () => ({ readFile, wrap, writeFile, commonService, jsonReader, clearExtension, multerUploader });

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
