export default (models, router, factories, helpers, appConfigs, methods) => {
	const { wrap } = factories;
	const { WebShopItem, WebShopPackage, Characters, MembCredits } = models;
	const { makeItemValue, readInventory, makeInventory } = helpers;

	router.get(
		'/web_shop/packages/:id',
		wrap(async (req, res, next) => {
			const packages = await WebShopPackage.findAll({ where: { category_id: req.params.id } });
			res.send(packages);
		})
	);

	router.get(
		'/web_shop/buy/:packageId/:characterName',
		wrap(async (req, res, next) => {
			const [character, webShopPackage, webShopItems] = [
				await Characters.findOne({
					where: { Name: req.params.characterName },
					attributes: ['AccountID', 'Name', 'Inventory']
				}),
				await WebShopPackage.findOne({ where: { id: req.params.packageId } }),
				await WebShopItem.findAll({ where: { packageId: req.params.packageId } })
			];
			const membCredits = await MembCredits.findOne({ where: { memb___id: character.AccountID } });
			const inventory = readInventory(character.Inventory);
			webShopItems.forEach(item => {
				const itemValue = makeItemValue(item);
				inventory[item.slot] = itemValue;
			});
			await character.update({ Inventory: makeInventory(inventory) });
			await membCredits.update({ credits: membCredits.credits - webShopPackage.price });
			res.sendStatus(200);
		})
	);

	return router;
};
