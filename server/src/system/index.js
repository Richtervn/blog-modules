import app from './app';
import server from './server';
import dbConnect from './dbConnect';

export default {
  name: 'System',
  description: 'System',
  services: {
    config: {
      require: ['::./config'],
      func: config => config
    },
    app: {
      require: ['context', 'config', 'routes', 'MuApps', 'L2Apps'],
      func: app
    },
    server: {
      require: ['app', 'config'],
      func: server
    },
    db: {
      require: ['config'],
      func: dbConnect
    }
  },
  exports: ['config', 'app', 'db', 'server']
};
