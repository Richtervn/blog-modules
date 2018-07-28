import worker from './worker';

export default {
  name: 'App Workers',
  description: 'Woker',
  services: {
    worker: {
      require: ['models', 'factories'],
      func: worker
    }
  },
  exports: ['worker']
};