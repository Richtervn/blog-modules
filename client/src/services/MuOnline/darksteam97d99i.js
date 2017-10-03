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
  },
  reset(query){
    const data = commonGet('mu/darksteam97d99i/characters/reset', null, query);
    return data;
  },
  deposit(query){
    const data = commonGet('mu/darksteam97d99i/banking/deposit', null, query);
    return data;
  },
  withdraw(query){
    const data = commonGet('mu/darksteam97d99i/banking/withdraw', null, query);
    return data;
  },
  loan(query){
    const data = commonGet('mu/darksteam97d99i/banking/loan', null, query);
    return data;
  },
  transfer(query){
    const data = commonGet('mu/darksteam97d99i/banking/transfer', null, query);
    return data;
  },
  getGameSetting(){
    const data = commonGet('mu/darksteam97d99i/system/game_setting');
    return data;
  },
  getServerInfo(){
    const data = commonGet('mu/darksteam97d99i/system/server_info');
    return data;
  }
};
