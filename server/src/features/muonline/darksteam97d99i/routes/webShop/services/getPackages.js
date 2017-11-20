import Promise from 'bluebird';

export default async (WebShopPackage, WebShopItems, id) => {
	let packages = await WebShopPackage.findAll({ where: { category_id: id } });
	packages = await Promise.map(packages, async pack => {
		let packData = pack.dataValues;
		let items = await WebShopItems.findAll({ where: { package_id: pack.id } });
		packData.items = items.map(item => item.dataValues);
		return packData;
	});
	return packages;
};
