import readFile from './readFile';
import writeFile from './writeFile';
import wrap from './wrap';
import commonService from './commonService';

const factories = () => ({ readFile, wrap, writeFile, commonService });

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
