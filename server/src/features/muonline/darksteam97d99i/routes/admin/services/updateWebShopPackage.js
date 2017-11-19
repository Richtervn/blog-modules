import Promise from 'bluebird';

export default async (WebShopPackage, WebShopItem, body) => {
	const webShopPackageForm = {
		category_id: body.category_id,
		name: body.name,
		price: body.price,
		is_vip_require: body.isVipRequire == 'true' ? 1 : 0
	};

	if (body.image_url) webShopPackageForm.image_url = body.image_url;

	body.items = JSON.parse(body.items);

	[
		await WebShopPackage.update(webShopPackageForm, { where: { id: body.id } }),
		await Promise.map(body.items, async item => {
			const webShopItemForm = {
				package_id: webShopPackage.id,
				slot: item.slot,
				category: item.category,
				duration: item.duration,
				itemId: item.itemId,
				luck: item.luck == true ? 1 : 0,
				skill: item.skill == true ? 1 : 0,
				option: item.option,
				level: item.level,
				exc1: item.exc1 == true ? 1 : 0,
				exc2: item.exc2 == true ? 1 : 0,
				exc3: item.exc3 == true ? 1 : 0,
				exc4: item.exc4 == true ? 1 : 0,
				exc5: item.exc5 == true ? 1 : 0,
				exc6: item.exc6 == true ? 1 : 0
			};
			const webShopItem = await WebShopItem.update(webShopItemForm, { where: { id: item.id } });
			return webShopItem;
		})
	];

	return webShopPackageForm;
};
