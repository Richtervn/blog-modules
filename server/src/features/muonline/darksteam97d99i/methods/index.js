import buyVipAccount from './buyVipAccount';
import buyVipCharacter from './buyVipCharacter';
import payByZen from './payByZen';
import payByBank from './payByBank';
import giveZen from './giveZen';
import giveCredits from './giveCredits';

export default (models, factories, io) => {
  return {
    buyVipAccount: buyVipAccount(models, factories),
    buyVipCharacter: buyVipCharacter(models, factories),
    payByBank: payByBank(models, factories, io),
    payByZen: payByZen(),
    giveZen: giveZen(models, factories, io),
    giveCredits: giveCredits(models, factories, io)
  };
};
