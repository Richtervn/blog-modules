import serviceCaller from 'factories/serviceCaller';

const { commonPost, commonGet } = serviceCaller;

export default {
  register(formBody){
    const data = commonPost('mu/darksteam97d99i/users/register', formBody);
    return data;
  },
  login(formBody){
    const data = commonPost('mu/darksteam97d99i/users/login', formBody);
    return data;
  }
};
