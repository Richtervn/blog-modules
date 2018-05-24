export default (models, factories) => {
	const { Character, MembCredits, UserCreditsLog } = models;
	const { increaseUnixDay } = factories;

	return async (vipSystem, characterId, userId) => {
		const [membCredit, character] = [
			await MembCredits.findOne({ where: { memb___id: userId } }),
			await Character.findOne({ where: { Name: characterId }, attributes: ['IsVip', 'VipExpirationTime', 'Name'] })
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
		
		UserCreditsLog.create({
      memb___id: membCredit.memb___id,
      description: `Buy Vip for character ${character.Name}`,
      type: 'minus',
      credits: vipSystem.price
    })

		return { credits: remainCredits };
	};
};
