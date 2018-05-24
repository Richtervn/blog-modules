export default (models, factories) => {
	const { MembInfo, MembCredits, UserCreditsLog } = models;
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
		UserCreditsLog.create({
      memb___id: membInfo.memb___id,
      description: 'Buy Vip for account',
      type: 'minus',
      credits: vipSystem.price
    })

		return { credits: remainCredits };
	};
};

