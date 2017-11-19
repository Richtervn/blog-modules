export default async (WebShopPackage, WebShopItem, id) => {
	const webShopItems = await WebShopItem.findAll({ where: { packageId: id } });
	[
		await WebShopPackage.destroy({ where: { id } }),
		await Promise.map(webShopItems, async items => {
			await items.destroy();
		})
	];
	return;
};
