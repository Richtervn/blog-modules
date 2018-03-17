export default (models, factories, io) => {
	const { Banking, BankingLog, UserBankingLog } = models;
	const { findSocket } = factories;

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

		const client = findSocket(io, 'ds9799_id', accountId);

		if (client) {
			client.emit('darksteam97d99i/USER_BANKING_LOG_UPDATE', userBankingLog);
		}

		return { zen_balance: banking.zen_balance - charge };
	};
};
