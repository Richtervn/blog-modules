import ensurePublicPaths from './ensurePublicPaths';
import Container from 'flat-ioc';

ensurePublicPaths();

const config = { interactive: false, loggingLevel: 'error' };
const container = new Container(module, './plugins', config);

export default container;
