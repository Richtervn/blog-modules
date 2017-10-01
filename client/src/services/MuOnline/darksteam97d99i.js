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
  },
  getCharacters(id){
    const data = commonGet('mu/darksteam97d99i/characters/get_chars', [id]);
    return data;
  },
  addPoint(query){
    const data = commonGet('mu/darksteam97d99i/characters/add_point', null, query);
    return data;
  }
};
