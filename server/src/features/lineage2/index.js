import freyaPortable from './freyaPortable';

const l2Apps = async (factories, config) => {
  return { freya_portable: await freyaPortable(factories, config) };
};

export default {
  name: 'Lineage II Webportals',
  description: 'Lineage II Web Portals for many versions',
  services: {
    MuRouter: {
      require: ['factories', 'config'],
      func: l2Apps
    }
  },
  exports: ['MuRouter']
};
