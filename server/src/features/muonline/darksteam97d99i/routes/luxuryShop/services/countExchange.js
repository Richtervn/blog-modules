export default async (Exchange, Character, memb___id, exchangeId, readInventory, makeItemValue) => {
	const [exchange, characters] = [
		await Exchange.findOne({ where: { id: exchangeId } }),
		await Character.findAll({ where: { AccountId: memb___id } })
	];
	const itemValue = makeItemValue(exchange.dataValues);
	let result = { total: 0 };
	characters.map(character => {
		let count = 0;
		const inventory = readInventory(character.Inventory);
		Object.keys(inventory).forEach(slot => {
			const inventoryValue = inventory[slot];
			if (inventoryValue[0] == itemValue[0] && inventoryValue[1] == itemValue[1] && inventoryValue[7] == itemValue[7]) {
				count++;
				result.total++;
			}
		});
		result[character.Name] = count;
	});
	return result;
};
