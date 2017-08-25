import readFile from './readFile';
import wrap from './wrap';

const factories = () => ({ readFile, wrap });

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
