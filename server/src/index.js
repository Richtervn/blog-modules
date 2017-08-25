import Container from 'flat-ioc';

const config = {};

const container = new Container(module, './plugins', config);

export default container;
