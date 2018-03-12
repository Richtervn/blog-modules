import buyVipAccount from './buyVipAccount';
import buyVipCharacter from './buyVipCharacter';
import payByZen from './payByZen';
import payByBank from './payByBank';

export default (models, factories) => {
	return {
		buyVipAccount: buyVipAccount(models),
		buyVipCharacter: buyVipCharacter(models),
		payByBank: payByBank(models),
		payByZen: payByZen()
	};
};
