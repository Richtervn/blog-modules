export default async (Exchange, Character, MembCredits, query, readInventory, makeItemValue, makeInventory) => {
	let { type, exchangeId, count, characterName, memb___id } = query;
	let result = {};

	const emptyItemValue = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
	const [membCredits, exchange] = [
		await MembCredits.findOne({ where: { memb___id } }),
		await Exchange.findOne({ where: { id: exchangeId } })
	];
	const itemValue = makeItemValue(exchange.dataValues);

	if (type == 'all') {
		const characters = await Character.findAll({ where: { AccountId: memb___id } });
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
				}
			}
			await character.update({ Inventory: makeInventory(inventory) });
		});
		await membCredits.update({ credits: membCredits.credits });
		result.credits = membCredits.credits;
		result.type = type;
	}

	if (type == 'single') {
		let traded = 0;
		let count = parseInt(count);
		const character = await Character.findOne({ where: { Name: characterName } });
		let inventory = readInventory(character.Inventory);

		for (let key in inventory) {
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

		result.credits = membCredits.credits;
		result.traded = traded;
		result.Name = characterName;
		result.type = type;
	}

	return result;
};
