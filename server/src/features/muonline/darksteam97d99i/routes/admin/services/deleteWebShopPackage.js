import Promise from 'bluebird';
import fs from 'fs';

export default async (WebShopPackage, WebShopItem, id) => {
	const [webShopItems, webShopPackage] = [
		await WebShopItem.findAll({ where: { package_id: id } }),
		await webShopPackage.findOne({ where: { id } })
	];

	fs.unlinkSync(webShopPackage.image_url);

	[
		(await WebShopPackage.destroy({ where: { id } }),
		await Promise.map(webShopItems, async items => {
			await items.destroy();
		}))
	];

	return;
};
