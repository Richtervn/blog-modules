export default async (models, helpers, characterName, packageId) => {
	const { Character, WebShopPackage, WebShopItem, MembCredits } = models;
	const { readInventory, makeInventory, makeItemValue } = helpers;

	const [character, webShopPackage, webShopItems] = [
		await Character.findOne({
			where: { Name: characterName },
			attributes: ['AccountID', 'Name', 'Inventory']
		}),
		await WebShopPackage.findOne({ where: { id: packageId } }),
		await WebShopItem.findAll({ where: { package_id: packageId } })
	];
	const membCredits = await MembCredits.findOne({ where: { memb___id: character.AccountID } });
	if (membCredits.credits < webShopPackage.price) {
		return { message: 'You do not have enough credits' };
	}
	const inventory = readInventory(character.Inventory);
	webShopItems.forEach(item => {
		const itemValue = makeItemValue(item);
		inventory[item.slot] = itemValue;
	});
	await character.update({ Inventory: makeInventory(inventory) });
	await membCredits.update({ credits: membCredits.credits - webShopPackage.price });
	return { credits: membCredits.credits - webShopPackage.price };
};
