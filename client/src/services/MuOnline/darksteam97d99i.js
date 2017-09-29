import serviceCaller from 'factories/serviceCaller';

const { commonPost, commonGet, commonPut } = serviceCaller;

export default {
  register(formBody){
    const data = commonPost('mu/darksteam97d99i/users/register', formBody);
    return data;
  },
  login(formBody){
    const data = commonPost('mu/darksteam97d99i/users/login', formBody);
    return data;
  },
  editProfile(formBody){
    const data = commonPut('mu/darksteam97d99i/users/profile', formBody);
    return data;
  }
};
