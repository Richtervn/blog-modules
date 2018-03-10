export default async (Consumable, MembCredits, Character, query, readInventory, makeItemValue, makeInventory) => {
	const { consumableId, memb___id, characterName } = query;
	const [consumable, membCredits, character] = [
		await Consumable.findOne({ where: { id: consumableId } }),
		await MembCredits.findOne({ where: { memb___id } }),
		await Character.findOne({ where: { Name: characterName } })
	];

	if (membCredits.credits < consumable.price) {
		return { message: 'Your credits is not enough' };
	}

	const inventory = readInventory(character.Inventory);
	const itemValue = makeItemValue(consumable);
	inventory.Inventory11 = itemValue;
	await character.update({ Inventory: makeInventory(inventory) });
	await membCredits.update({ credits: membCredits.credits - consumable.price });
	return { credits: membCredits.credits - consumable.price };
};
