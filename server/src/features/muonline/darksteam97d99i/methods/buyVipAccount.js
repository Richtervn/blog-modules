export default (models, factories) => {
	const { MembInfo, MembCredits } = models;
	const { increaseUnixDay } = factories;

	return async (vipSystem, userId) => {
		const [membCredit, membInfo] = [
			await MembCredits.findOne({ where: { memb___id: userId } }),
			await MembInfo.findOne({ where: { memb___id: userId }, attributes: ['IsVip', 'VipExpirationTime'] })
		];

		if (membCredit.credits < vipSystem.price) {
			return { message: 'You do not have enough credits' };
		}

		const remainCredits = membCredit.credits - vipSystem.price;
		membCredit.update({ credits: remainCredits });
		membInfo.update({
			IsVip: 1,
			VipExpirationTime: membInfo.IsVip
				? increaseUnixDay(membInfo.VipExpirationTime, vipSystem.duration)
				: increaseUnixDay(null, vipSystem.duration)
		});

		return { credits: remainCredits };
	};
};
