import { serviceCaller } from 'helpers';
// eslint-disable-next-line
const { commonPost, commonGet, commonPut, commonDelete, commonPostMultiplePart, commonPutMultiplePart } = serviceCaller;

export default {
  /* Admin Accounts Manager Services*/
  adminGetAccounts(query) {
    const data = commonGet('darksteam97d99i/users', null, query);
    return data;
  },
  adminGetAccountDetail(id) {
    const data = commonGet('darksteam97d99i/users', [id]);
    return data;
  },
  adminAddAccount(formBody) {
    const data = commonPost('darksteam97d99i/users', formBody);
    return data;
  },
  adminEditAccount(formBody) {
    const data = commonPut('darksteam97d99i/users', formBody);
    return data;
  },
  adminDeleteAccount(id) {
    const data = commonDelete('darksteam97d99i/users/' + id);
    return data;
  },

  /* App Control Services */
  getGameSetting() {
    const data = commonGet('darksteam97d99i/system/game_setting');
    return data;
  },
  getServerInfo() {
    const data = commonGet('darksteam97d99i/system/server_info');
    return data;
  },
  editServerInfo(formBody) {
    const data = commonPut('darksteam97d99i/system/server_info', formBody);
    return data;
  },
  editGameSetting(formBody) {
    const data = commonPut('darksteam97d99i/system/game_setting', formBody);
    return data;
  },

  /* User Services */
  login(formBody) {
    const data = commonPost('darksteam97d99i/users/login', formBody);
    return data;
  },
  register(formBody) {
    const data = commonPost('darksteam97d99i/users/register', formBody);
    return data;
  },
  getTopPoints(query) {
    const data = commonGet('darksteam97d99i/ranking/top_points', null, query);
    return data;
  },
  getTopResets(query) {
    const data = commonGet('darksteam97d99i/ranking/top_resets', null, query);
    return data;
  },
  getTopZen() {
    const data = commonGet('darksteam97d99i/ranking/top_zen');
    return data;
  },
  getTopCredits() {
    const data = commonGet('darksteam97d99i/ranking/top_credits');
    return data;
  },
  recoverPassword(id) {
    const data = commonGet('darksteam97d99i/users/recover_password', [id]);
    return data;
  },
  getCurrentUser() {
    const data = commonGet('darksteam97d99i/users/current');
    return data;
  },
  getCharacters(id){
    const data = commonGet('darksteam97d99i/characters/account', [id]);
    return data;
  }

  // editProfile(formBody) {
  //   const data = commonPut('mu/darksteam97d99i/users/profile', formBody);
  //   return data;
  // },
  // getCharacters(id) {
  //   const data = commonGet('mu/darksteam97d99i/characters/get_chars', [id]);
  //   return data;
  // },
  // addPoint(query) {
  //   const data = commonGet('mu/darksteam97d99i/characters/add_point', null, query);
  //   return data;
  // },
  // reset(query) {
  //   const data = commonGet('mu/darksteam97d99i/characters/reset', null, query);
  //   return data;
  // },
  // grandReset(query) {
  //   const data = commonGet('mu/darksteam97d99i/characters/grand_reset', null, query);
  //   return data;
  // },
  // resetQuest(query) {
  //   const data = commonGet('mu/darksteam97d99i/characters/quest_reset', null, query);
  //   return data;
  // },
  // deposit(query) {
  //   const data = commonGet('mu/darksteam97d99i/banking/deposit', null, query);
  //   return data;
  // },
  // withdraw(query) {
  //   const data = commonGet('mu/darksteam97d99i/banking/withdraw', null, query);
  //   return data;
  // },
  // loan(query) {
  //   const data = commonGet('mu/darksteam97d99i/banking/loan', null, query);
  //   return data;
  // },
  // transfer(query) {
  //   const data = commonGet('mu/darksteam97d99i/banking/transfer', null, query);
  //   return data;
  // },
  // buyCredit(query) {
  //   const data = commonGet('mu/darksteam97d99i/banking/buy_credit', null, query);
  //   return data;
  // },

  // getMuData(file) {
  //   const data = commonGet('mu/darksteam97d99i/tools/data', [file]);
  //   return data;
  // },
  // getVipSystems() {
  //   const data = commonGet('mu/darksteam97d99i/vip_system/get_all');
  //   return data;
  // },
  // addVipSystem(formBody) {
  //   const data = commonPost('mu/darksteam97d99i/vip_system/add', formBody);
  //   return data;
  // },
  // editVipSystem(formBody) {
  //   const data = commonPut('mu/darksteam97d99i/vip_system/update', formBody);
  //   return data;
  // },
  // deleteVipSystem(id) {
  //   const data = commonDelete('mu/darksteam97d99i/vip_system/' + id);
  //   return data;
  // },
  // buyVip(vipPackage, user, focusCharacter) {
  //   const data = commonGet('mu/darksteam97d99i/vip_system/buy', null, {
  //     packageId: vipPackage.id,
  //     userId: user.memb___id,
  //     characterId: focusCharacter.Name
  //   });
  //   return data;
  // },
  // adminGetAccounts(query) {
  //   const data = commonGet('mu/darksteam97d99i/admin/memb_info', null, query);
  //   return data;
  // },

  // adminGetBankings() {
  //   const data = commonGet('mu/darksteam97d99i/admin/banking');
  //   return data;
  // },
  // adminGetCredits() {
  //   const data = commonGet('mu/darksteam97d99i/admin/credit');
  //   return data;
  // },
  // adminEditBanking(formBody) {
  //   const data = commonPut('mu/darksteam97d99i/admin/banking', formBody);
  //   return data;
  // },
  // adminEditCredit(formBody) {
  //   const data = commonPut('mu/darksteam97d99i/admin/credit', formBody);
  //   return data;
  // },

  // adminEditCharacter(formBody) {
  //   const data = commonPut('mu/darksteam97d99i/admin/character', formBody);
  //   return data;
  // },

  // adminAddCharacter(formBody) {
  //   const data = commonPost('mu/darksteam97d99i/admin/character', formBody);
  //   return data;
  // },
  // adminDeleteCharacter(id) {
  //   const data = commonDelete('mu/darksteam97d99i/admin/character/' + id);
  //   return data;
  // },

  // addWebShopPackage(formBody) {
  //   formBody.items = JSON.stringify(formBody.items);
  //   const data = commonPostMultiplePart('mu/darksteam97d99i/admin/web_shop', formBody);
  //   return data;
  // },
  // getWebShopPackage(id) {
  //   const data = commonGet('mu/darksteam97d99i/web_shop/packages', [id]);
  //   return data;
  // },
  // editWebShopPackage(formBody) {
  //   formBody.items = JSON.stringify(formBody.items);
  //   const data = commonPutMultiplePart('mu/darksteam97d99i/admin/web_shop', formBody);
  //   return data;
  // },
  // deleteWebShopPackage(id) {
  //   const data = commonDelete('mu/darksteam97d99i/admin/web_shop/' + id);
  //   return data;
  // },
  // buyWebShopPackage(packageId, characterName) {
  //   const data = commonGet('mu/darksteam97d99i/web_shop/buy', [packageId, characterName]);
  //   return data;
  // },
  // adminAddExchange(formBody) {
  //   const data = commonPostMultiplePart('mu/darksteam97d99i/luxury_shop/exchange', formBody);
  //   return data;
  // },
  // adminEditExchange(formBody) {
  //   const data = commonPutMultiplePart('mu/darksteam97d99i/luxury_shop/exchange', formBody);
  //   return data;
  // },
  // deleteExchange(id) {
  //   const data = commonDelete('mu/darksteam97d99i/luxury_shop/exchange/' + id);
  //   return data;
  // },
  // getExchange() {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/exchange');
  //   return data;
  // },
  // adminAddConsumable(formBody) {
  //   const data = commonPostMultiplePart('mu/darksteam97d99i/luxury_shop/consumable', formBody);
  //   return data;
  // },
  // adminEditConsumable(formBody) {
  //   const data = commonPutMultiplePart('mu/darksteam97d99i/luxury_shop/consumable', formBody);
  //   return data;
  // },
  // getConsumable() {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/consumable');
  //   return data;
  // },
  // deleteConsumable(id) {
  //   const data = commonDelete('mu/darksteam97d99i/luxury_shop/consumable/' + id);
  //   return data;
  // },
  // adminAddReceipt(formBody) {
  //   formBody.materials = JSON.stringify(formBody.materials);
  //   const data = commonPostMultiplePart('mu/darksteam97d99i/luxury_shop/receipt', formBody);
  //   return data;
  // },
  // adminEditReceipt(formBody) {
  //   formBody.materials = JSON.stringify(formBody.materials);
  //   const data = commonPutMultiplePart('mu/darksteam97d99i/luxury_shop/receipt', formBody);
  //   return data;
  // },
  // getReceipt() {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/receipt');
  //   return data;
  // },
  // deleteReceipt(id) {
  //   const data = commonDelete('mu/darksteam97d99i/luxury_shop/receipt/' + id);
  //   return data;
  // },
  // getExchangeCount(memb___id, exchangeId) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/exchange/count', [memb___id, exchangeId]);
  //   return data;
  // },
  // tradeExchange(query) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/exchange/trade', null, query);
  //   return data;
  // },
  // buyReceipt(memb___id, receiptId) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/receipt/buy', [memb___id, receiptId]);
  //   return data;
  // },
  // buyConsumable(query) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/consumable/buy', null, query);
  //   return data;
  // },
  // getUserReceipts(memb___id) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/user_receipt', [memb___id]);
  //   return data;
  // },
  // getCountMaterials(memb___id, receiptId) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/user_receipt/count', [memb___id, receiptId]);
  //   return data;
  // },
  // craftItem(characterName, receiptId) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/user_receipt/craft', [characterName, receiptId]);
  //   return data;
  // },
  // sellReceipt(memb___id, receiptId) {
  //   const data = commonGet('mu/darksteam97d99i/luxury_shop/user_receipt/sell', [memb___id, receiptId]);
  //   return data;
  // },
  // getCharacterInventory(characterName) {
  //   const data = commonGet('mu/darksteam97d99i/upgrade_items/inventory', [characterName]);
  //   return data;
  // },
  // upgradeItem(body) {
  //   const data = commonPut('mu/darksteam97d99i/upgrade_items', body);
  //   return data;
  // }
};
