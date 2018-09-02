import Promise from 'bluebird';

export default async (models, query, readInventory, makeItemValue, makeInventory) => {
	let { type, exchangeId, count, characterName, memb___id } = query;
	const { Exchange, Character, MembCredits, UserCreditsLog } = models;
	let result = {};
	let totalCount = 0;
	let userId;

	const emptyItemValue = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
	const [membCredits, exchange] = [
		await MembCredits.findOne({ where: { memb___id } }),
		await Exchange.findOne({ where: { id: exchangeId } })
	];
	const itemValue = makeItemValue(exchange.dataValues);

	if (type == 'all') {
		userId = memb___id;
		const characters = await Character.findAll({ where: { AccountID: memb___id } });
		await Promise.map(characters, async character => {
			let inventory = readInventory(character.Inventory);
			for (let key in inventory) {
				if (
					inventory[key][0] == itemValue[0] &&
					inventory[key][1] == itemValue[1] &&
					inventory[key][7] == itemValue[7]
				) {
					inventory[key] = emptyItemValue;
					membCredits.credits = parseInt(membCredits.credits) + parseInt(exchange.price);
					totalCount++;
				}
			}
			await character.update({ Inventory: makeInventory(inventory) });
		});
		await membCredits.update({ credits: membCredits.credits });

		result.credits = membCredits.credits;
		result.profit = totalCount * parseInt(exchange.price);
	}

	if (type == 'single') {
		let traded = 0;
		count = parseInt(count);

		const character = await Character.findOne({ where: { Name: characterName } });
		userId = character.AccountID;
		let inventory = readInventory(character.Inventory);

		const slots = Object.keys(inventory);
		for (let i = 0; i < slots.length; i++) {
			const key = slots[i];
			if (traded == count) {
				break;
			}
			if (inventory[key][0] == itemValue[0] && inventory[key][1] == itemValue[1] && inventory[key][7] == itemValue[7]) {
				traded++;
				inventory[key] = emptyItemValue;
				membCredits.credits = parseInt(membCredits.credits) + parseInt(exchange.price);
			}
		}

		[
			await membCredits.update({ credits: membCredits.credits }),
			await character.update({ Inventory: makeInventory(inventory) })
		];
		totalCount = count;

		result.credits = membCredits.credits;
		result.profit = totalCount * parseInt(exchange.price);
	}

	UserCreditsLog.create({
		memb___id: userId,
		description: `Exchange ${totalCount} ${exchange.name}`,
		type: 'add',
		credits: result.profit
	});

	return result;
};
