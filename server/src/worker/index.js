import worker from './worker';

export default {
  name: 'App Workers',
  description: 'Woker',
  services: {
    worker: {
      require: ['models', 'factories', 'socket'],
      func: worker
    }
  },
  exports: ['worker']
};