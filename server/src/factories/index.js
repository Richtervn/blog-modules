import clearExtension from './clearExtension';
import readFile from './readFile';
import writeFile from './writeFile';
import wrap from './wrap';
import commonService from './commonService';
import jsonReader from './jsonReader';

const factories = () => ({ readFile, wrap, writeFile, commonService, jsonReader, clearExtension });

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
