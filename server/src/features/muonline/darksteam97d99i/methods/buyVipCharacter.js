export default (models, factories) => {
	const { Character, MembCredits } = models;
	const { increaseUnixDay } = factories;

	return async (vipSystem, characterId) => {
		const [membCredit, character] = [
			await MembCredits.findOne({ where: { memb___id: userId } }),
			await Character.findOne({ where: { Name: characterId }, attributes: ['IsVip', 'VipExpirationTime'] })
		];

		if (membCredit.credits < vipSystem.price) {
			return { message: 'You do not have enough credits' };
		}

		const remainCredits = membCredit.credits - vipSystem.price;
		membCredit.update({ credits: remainCredits });
		character.update({
			IsVip: 1,
			VipExpirationTime: character.IsVip
				? increaseUnixDay(character.VipExpirationTime, vipSystem.duration)
				: increaseUnixDay(null, vipSystem.duration)
		});

		return { credits: remainCredits };
	};
};
