import serviceCaller from 'factories/serviceCaller';

const { commonPost, commonGet, commonPut, commonDelete } = serviceCaller;

export default {
  register(formBody) {
    const data = commonPost('mu/darksteam97d99i/users/register', formBody);
    return data;
  },
  login(formBody) {
    const data = commonPost('mu/darksteam97d99i/users/login', formBody);
    return data;
  },
  editProfile(formBody) {
    const data = commonPut('mu/darksteam97d99i/users/profile', formBody);
    return data;
  },
  getCharacters(id) {
    const data = commonGet('mu/darksteam97d99i/characters/get_chars', [id]);
    return data;
  },
  addPoint(query) {
    const data = commonGet('mu/darksteam97d99i/characters/add_point', null, query);
    return data;
  },
  reset(query) {
    const data = commonGet('mu/darksteam97d99i/characters/reset', null, query);
    return data;
  },
  grandReset(query) {
    const data = commonGet('mu/darksteam97d99i/characters/grand_reset', null, query);
    return data;
  },
  resetQuest(query) {
    const data = commonGet('mu/darksteam97d99i/characters/quest_reset', null, query);
    return data;
  },
  deposit(query) {
    const data = commonGet('mu/darksteam97d99i/banking/deposit', null, query);
    return data;
  },
  withdraw(query) {
    const data = commonGet('mu/darksteam97d99i/banking/withdraw', null, query);
    return data;
  },
  loan(query) {
    const data = commonGet('mu/darksteam97d99i/banking/loan', null, query);
    return data;
  },
  transfer(query) {
    const data = commonGet('mu/darksteam97d99i/banking/transfer', null, query);
    return data;
  },
  buyCredit(query) {
    const data = commonGet('mu/darksteam97d99i/banking/buy_credit', null, query);
    return data;
  },
  getGameSetting() {
    const data = commonGet('mu/darksteam97d99i/system/game_setting');
    return data;
  },
  getServerInfo() {
    const data = commonGet('mu/darksteam97d99i/system/server_info');
    return data;
  },
  getMuData(file) {
    const data = commonGet('mu/darksteam97d99i/tools/data', [file]);
    return data;
  },
  getVipSystems() {
    const data = commonGet('mu/darksteam97d99i/vip_system/get_all');
    return data;
  },
  addVipSystem(formBody) {
    const data = commonPost('mu/darksteam97d99i/vip_system/add', formBody);
    return data;
  },
  editVipSystem(formBody) {
    const data = commonPut('mu/darksteam97d99i/vip_system/update', formBody);
    return data;
  },
  deleteVipSystem(id) {
    const data = commonDelete('mu/darksteam97d99i/vip_system/' + id);
    return data;
  },
  buyVip(vipPackage, user, focusCharacter) {
    const data = commonGet('mu/darksteam97d99i/vip_system/buy', null, {
      packageId: vipPackage.id,
      userId: user.memb___id,
      characterId: focusCharacter.Name
    });
    return data;
  },
  adminGetAccounts(query) {
    const data = commonGet('mu/darksteam97d99i/admin/memb_info', null, query);
    return data;
  },
  adminEditAccount(formBody) {
    const data = commonPost('mu/darksteam97d99i/admin/memb_info', formBody);
    return data;
  },
  adminDeleteAccount(id) {
    const data = commonDelete('mu/darksteam97d99i/admin/memb_info/' + id);
    return data;
  },
  adminGetCharacters(query) {
    const data = commonGet('mu/darksteam97d99i/admin/character', null, query);
    return data;
  },
  adminGetBanks(query) {
    const data = commonGet('mu/darksteam97d99i/admin/banking', null, query);
    return data;
  },
  adminGetCredits(query) {
    const data = commonGet('mu/darksteam97d99i/admin/credits', null, query);
    return data;
  }
};
