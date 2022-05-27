import ensurePublicPaths from './ensurePublicPaths';
import Container from 'flat-ioc';
import mangaManager from './utils/MangaManager';

if (process.env.NODE_ENV === 'production') {
  require('babel-polyfill');
}

// ensurePublicPaths();

// const config = { interactive: false, loggingLevel: 'error' };
// const container = new Container(module, './plugins', config);

mangaManager.getDetails('http://www.nettruyenco.com/truyen-tranh/ta-co-mot-son-trai-370810').then(console.log);

// export default container;
