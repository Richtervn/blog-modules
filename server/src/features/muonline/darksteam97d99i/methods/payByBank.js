export default (models, factories) => {
	const { Banking, BankingLog, UserBankingLog } = models;

	return async (accountId, charge, { description, character_name }) => {
		const banking = await Banking.findOne({
			where: { memb___id: accountId }
		});
		banking.zen_balance = parseInt(banking.zen_balance);

		if (banking.zen_balance < charge) {
			return { message: 'Your Banking balance is not enough' };
		}

		const [userBankingLog] = [
			await UserBankingLog.create({ memb___id: accountId, description, type: 'minus', money: charge }),
			await banking.update({ zen_balance: banking.zen_balance - charge })
		];

		return { zen_balance: banking.zen_balance - charge };
	};
};
