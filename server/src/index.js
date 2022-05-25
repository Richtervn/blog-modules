import ensurePublicPaths from './ensurePublicPaths';
import Container from 'flat-ioc';

if (process.env.NODE_ENV === 'production') {
  require('babel-polyfill');
}

ensurePublicPaths();

const config = { interactive: false, loggingLevel: 'error' };
const container = new Container(module, './plugins', config);

export default container;
