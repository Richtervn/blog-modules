import buyVipAccount from './buyVipAccount';
import buyVipCharacter from './buyVipCharacter';
import payByZen from './payByZen';
import payByBank from './payByBank';

export default (models, helpers) => {
	return {
		buyVipAccount: buyVipAccount(models, helpers),
		buyVipCharacter: buyVipCharacter(models, helpers),
		payByBank: payByBank(models),
		payByZen: payByZen()
	};
};
