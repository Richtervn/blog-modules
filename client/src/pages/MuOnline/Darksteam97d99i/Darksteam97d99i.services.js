import { serviceCaller } from 'helpers';

const { commonPost, commonGet, commonPut, commonDelete, commonPostMultiplePart, commonPutMultiplePart } = serviceCaller;

export default {
  /* Admin Accounts Manager Services*/
  adminGetAccounts({ query }) {
    const data = commonGet('darksteam97d99i/users', null, query);
    return data;
  },
  adminGetAccountDetail({ id }) {
    const data = commonGet('darksteam97d99i/users', [id]);
    return data;
  },
  adminAddAccount({ formBody }) {
    const data = commonPost('darksteam97d99i/users', formBody);
    return data;
  },
  adminEditAccount({ formBody }) {
    const data = commonPut('darksteam97d99i/users', formBody);
    return data;
  },
  adminDeleteAccount({ id }) {
    const data = commonDelete('darksteam97d99i/users/' + id);
    return data;
  },

  /* Admin Characters Manager Services */
  adminGetCharacters({ query }) {
    const data = commonGet('darksteam97d99i/characters', null, query);
    return data;
  },
  adminGetCharacterDetail({ id }) {
    const data = commonGet('darksteam97d99i/characters/detail', [id]);
    return data;
  },
  adminAddCharacter({ formBody }) {
    const data = commonPost('darksteam97d99i/characters', formBody);
    return data;
  },
  adminEditCharacter({ formBody }) {
    const data = commonPut('darksteam97d99i/characters', formBody);
    return data;
  },
  adminDeleteCharacter({ id }) {
    const data = commonDelete('darksteam97d99i/characters/' + id);
    return data;
  },

  /* Admin Banking Manager Services */
  adminGetBankings() {
    const data = commonGet('darksteam97d99i/banking');
    return data;
  },
  adminEditBanking({ formBody }) {
    const data = commonPut('darksteam97d99i/banking', formBody);
    return data;
  },
  adminAddBanking({ formBody }) {
    const data = commonPost('darksteam97d99i/banking', formBody);
    return data;
  },
  adminDeleteBanking({ id }) {
    const data = commonDelete('darksteam97d99i/banking/' + id);
    return data;
  },
  adminGetBankingsLogs() {
    const data = commonGet('darksteam97d99i/banking/logs');
    return data;
  },

  /* Admin Credit Manager Services */
  adminGetCredits() {
    const data = commonGet('darksteam97d99i/credits');
    return data;
  },
  adminAddCredit({ formBody }) {
    const data = commonPost('darksteam97d99i/credits', formBody);
    return data;
  },
  adminEditCredit({ formBody }) {
    const data = commonPut('darksteam97d99i/credits', formBody);
    return data;
  },
  adminDeleteCredit({ id }) {
    const data = commonDelete('darksteam97d99i/credits/' + id);
    return data;
  },

  /* Admin Vip System Services */
  adminEditVipPackage({ formBody }) {
    const data = commonPut('darksteam97d99i/vip_system', formBody);
    return data;
  },
  adminAddVipPackage({ formBody }) {
    const data = commonPost('darksteam97d99i/vip_system', formBody);
    return data;
  },
  adminDeleteVipPackage({ id }) {
    const data = commonDelete('darksteam97d99i/vip_system' + id);
    return data;
  },

  /* Admin Webshop Services */
  adminAddWebShopPackage({ formBody }) {
    formBody.items = JSON.stringify(formBody.items);
    const data = commonPostMultiplePart('darksteam97d99i/web_shop', formBody);
    return data;
  },
  adminEditWebShopPackage({ formBody }) {
    formBody.items = JSON.stringify(formBody.items);
    const data = commonPutMultiplePart('darksteam97d99i/web_shop', formBody);
    return data;
  },
  adminDeleteWebShopPackage({ id }) {
    const data = commonDelete('darksteam97d99i/web_shop/' + id);
    return data;
  },

  /* Admin Luxury Shop Services */
  adminAddExchange({ formBody }) {
    const data = commonPostMultiplePart('darksteam97d99i/luxury_shop/exchange', formBody);
    return data;
  },
  adminEditExchange({ formBody }) {
    const data = commonPutMultiplePart('darksteam97d99i/luxury_shop/exchange', formBody);
    return data;
  },
  adminDeleteExchange({ id }) {
    const data = commonDelete('darksteam97d99i/luxury_shop/exchange/' + id);
    return data;
  },
  adminAddConsumable({ formBody }) {
    const data = commonPostMultiplePart('darksteam97d99i/luxury_shop/consumable', formBody);
    return data;
  },
  adminEditConsumable({ formBody }) {
    const data = commonPutMultiplePart('darksteam97d99i/luxury_shop/consumable', formBody);
    return data;
  },
  adminDeleteConsumable({ id }) {
    const data = commonDelete('darksteam97d99i/luxury_shop/consumable/' + id);
    return data;
  },
  adminAddReceipt({ formBody }) {
    formBody.materials = JSON.stringify(formBody.materials);
    const data = commonPostMultiplePart('darksteam97d99i/luxury_shop/receipt', formBody);
    return data;
  },
  adminEditReceipt({ formBody }) {
    formBody.materials = JSON.stringify(formBody.materials);
    const data = commonPutMultiplePart('darksteam97d99i/luxury_shop/receipt', formBody);
    return data;
  },
  adminDeleteReceipt({ id }) {
    const data = commonDelete('darksteam97d99i/luxury_shop/receipt/' + id);
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
  editServerInfo({ formBody }) {
    const data = commonPut('darksteam97d99i/system/server_info', formBody);
    return data;
  },
  editGameSetting({ formBody }) {
    const data = commonPut('darksteam97d99i/system/game_setting', formBody);
    return data;
  },

  /* User Services */
  login({ formBody }) {
    const data = commonPost('darksteam97d99i/users/login', formBody);
    return data;
  },
  register({ formBody }) {
    const data = commonPost('darksteam97d99i/users/register', formBody);
    return data;
  },
  editProfile({ formBody }) {
    const data = commonPut('darksteam97d99i/users/profile', formBody);
    return data;
  },
  recoverPassword({ id }) {
    const data = commonGet('darksteam97d99i/users/recover_password', [id]);
    return data;
  },
  getCurrentUser() {
    const data = commonGet('darksteam97d99i/users/current');
    return data;
  },

  /* Ranking Services */
  getTopPoints({ query }) {
    const data = commonGet('darksteam97d99i/ranking/top_points', null, query);
    return data;
  },
  getTopResets({ query }) {
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

  getCharacters({ id }) {
    const data = commonGet('darksteam97d99i/characters/account', [id]);
    return data;
  },

  /* Server Service */
  getServerData({ fileName }) {
    const data = commonGet('darksteam97d99i/system/data', [fileName]);
    return data;
  },
  generateTextFile({ formBody }) {
    const data = commonPost('darksteam97d99i/system/generate_text_file', formBody);
    return data;
  },
  getWebQuests() {
    const data = commonGet('darksteam97d99i/system/web_quests');
    return data;
  },
  editWebQuests({ formBody }) {
    const data = commonPut('darksteam97d99i/system/web_quests', formBody);
    return data;
  },

  /* Banking Services */
  getUserBankingLogs({ id }) {
    const data = commonGet('darksteam97d99i/banking/user_logs', [id]);
    return data;
  },
  deposit({ query }) {
    const data = commonGet('darksteam97d99i/banking/deposit', null, query);
    return data;
  },
  withdraw({ query }) {
    const data = commonGet('darksteam97d99i/banking/withdraw', null, query);
    return data;
  },
  loan({ query }) {
    const data = commonGet('darksteam97d99i/banking/loan', null, query);
    return data;
  },
  transfer({ query }) {
    const data = commonGet('darksteam97d99i/banking/transfer', null, query);
    return data;
  },
  buyCredit({ query }) {
    const data = commonGet('darksteam97d99i/banking/buy_credit', null, query);
    return data;
  },
  sellCredit({ query }) {
    const data = commonGet('darksteam97d99i/banking/sell_credit', null, query);
    return data;
  },

  /* Character Services */
  addPoint({ query }) {
    const data = commonGet('darksteam97d99i/characters/add_points', null, query);
    return data;
  },
  reset({ query }) {
    const data = commonGet('darksteam97d99i/characters/reset', null, query);
    return data;
  },
  grandReset({ query }) {
    const data = commonGet('darksteam97d99i/characters/grand_reset', null, query);
    return data;
  },
  resetQuest({ query }) {
    const data = commonGet('darksteam97d99i/characters/quest_reset', null, query);
    return data;
  },

  /* Credits Services */
  getUserCreditLogs({ id }) {
    const data = commonGet('darksteam97d99i/credits/user_logs', [id]);
    return data;
  },

  /* Vip System Services */
  getVipPackages() {
    const data = commonGet('darksteam97d99i/vip_system');
    return data;
  },
  buyVip({ query }) {
    const data = commonGet('darksteam97d99i/vip_system/buy', null, query);
    return data;
  },

  /* Webshop Services */
  getWebShopPackages({ id }) {
    const data = commonGet('darksteam97d99i/web_shop/packages', [id]);
    return data;
  },
  buyWebShopPackage({ packageId, characterName }) {
    const data = commonGet('darksteam97d99i/web_shop/buy', [packageId, characterName]);
    return data;
  },

  /* Luxury Shop Services */
  getExchanges() {
    const data = commonGet('darksteam97d99i/luxury_shop/exchange');
    return data;
  },
  getConsumables() {
    const data = commonGet('darksteam97d99i/luxury_shop/consumable');
    return data;
  },
  getReceipts() {
    const data = commonGet('darksteam97d99i/luxury_shop/receipt');
    return data;
  },
  getExchangeCount({ memb___id, exchangeId }) {
    const data = commonGet('darksteam97d99i/luxury_shop/exchange/count', [memb___id, exchangeId]);
    return data;
  },
  tradeExchange({ query }) {
    const data = commonGet('darksteam97d99i/luxury_shop/exchange/trade', null, query);
    return data;
  },
  buyReceipt({ memb___id, receiptId }) {
    const data = commonGet('darksteam97d99i/luxury_shop/receipt/buy', [memb___id, receiptId]);
    return data;
  },
  buyConsumable({ query }) {
    const data = commonGet('darksteam97d99i/luxury_shop/consumable/buy', null, query);
    return data;
  },

  /* Blacksmith Services */
  getUserReceipts({ memb___id }) {
    const data = commonGet('darksteam97d99i/luxury_shop/user_receipt', [memb___id]);
    return data;
  },
  getCountMaterials({ memb___id, receiptId }) {
    const data = commonGet('darksteam97d99i/luxury_shop/user_receipt/count', [memb___id, receiptId]);
    return data;
  },
  craftItem({ characterName, receiptId }) {
    const data = commonGet('darksteam97d99i/luxury_shop/user_receipt/craft', [characterName, receiptId]);
    return data;
  },
  sellReceipt({ memb___id, receiptId }) {
    const data = commonGet('darksteam97d99i/luxury_shop/user_receipt/sell', [memb___id, receiptId]);
    return data;
  },

  /* UpgradeItems Services */
  getCharacterInventory({ characterName }) {
    const data = commonGet('darksteam97d99i/upgrade_items', [characterName]);
    return data;
  },
  upgradeItem({ formBody }) {
    const data = commonPut('darksteam97d99i/upgrade_items', formBody);
    return data;
  }
};
