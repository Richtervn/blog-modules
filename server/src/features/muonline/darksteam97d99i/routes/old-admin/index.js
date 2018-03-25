import getMembers from './services/getMembers';
import updateMember from './services/updateMember';
import addMember from './services/addMember';
import getCharacters from './services/getCharacters';
import addCharacter from './services/addCharacter';
import updateCharacter from './services/updateCharacter';
import addWebShopPackage from './services/addWebShopPackage';
import updateWebShopPackage from './services/updateWebShopPackage';
import deleteWebShopPackage from './services/deleteWebShopPackage';
import uploadWebShopPackageImage from './services/uploadWebShopPackageImage';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap } = factories;
  const {
    MembInfo,
    AccountCharacter,
    Character,
    MembCredits,
    Banking,
    ViCurInfo,
    WebShopPackage,
    WebShopItem
  } = models;




  return router;
};
