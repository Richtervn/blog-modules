export default models => {

	const { Banking } = models;

	return async (accountId, charge) => {
		const banking = await Banking.findOne({
			where: { memb___id: accountId }
		});
		banking.zen_balance = parseInt(banking.zen_balance);
		if (banking.zen_balance < charge) {
			return { message: 'Your Banking balance is not enough' };
		}
		await banking.update({ zen_balance: banking.zen_balance - charge });
		return { zen_balance: banking.zen_balance - charge };
	};
};
