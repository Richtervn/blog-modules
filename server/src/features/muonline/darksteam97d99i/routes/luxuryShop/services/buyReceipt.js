export default async (models, memb___id, receiptId) => {
	const { Receipt, MembCredits, UserReceipt, UserCreditsLog } = models;

	const existReceipt = UserReceipt.findOne({ where: { memb___id, receipt_id: receiptId } });
	if (existReceipt) {
		return { message: 'You already own this receipt' };
	}

	const [membCredits, receipt] = [
		await MembCredits.findOne({ where: { memb___id } }),
		await Receipt.findOne({ where: { id: receiptId } })
	];
	if (membCredits.credits < receipt.price) {
		return { message: 'Your credits is not enough' };
	}

	await membCredits.update({ credits: membCredits.credits - receipt.price });
	UserCreditsLog.create({
		memb___id: memb___id,
		description: `Buy ${receipt.name} receipt`,
		type: 'minus',
		credits: receipt.price
	});

	const userReceipt = await UserReceipt.create({
		memb___id: memb___id,
		receipt_id: receiptId
	});

	return { credits: membCredits.credits - receipt.price, receiptId };
};
