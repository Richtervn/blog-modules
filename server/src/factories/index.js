import readFile from './readFile';
import writeFile from './writeFile';
import wrap from './wrap';

const factories = () => ({ readFile, wrap, writeFile });

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
