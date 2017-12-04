export default async (Receipt, MembCredits, UserReceipt, memb___id, receiptId) => {
	const [membCredits, receipt] = [
		await MembCredits.findOne({ where: { memb___id } }),
		await Receipt.findOne({ where: { id: receiptId } })
	];
	if (membCredits.credits < receipt.price) {
		return { message: 'Your credits is not enough' };
	}

	await membCredits.update({ credits: membCredits.credits - receipt.price });

	const userReceipt = await UserReceipt.create({
		memb___id: memb___id,
		receipt_id: receiptId
	});

	return { credits: membCredits.credits - receipt.price, receiptId };
};
