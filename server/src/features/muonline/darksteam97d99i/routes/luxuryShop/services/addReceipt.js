import Promise from 'bluebird';

export default async (Receipt, Material, body) => {
	const receiptForm = {
		name: body.name,
		price: body.price,
		charge_price: body.charge_price,
		description: body.description,
		category: body.category,
		level: body.level,
		option: body.option,
		slot: body.slot,
		duration: body.duration,
		itemId: body.itemId,
		skill: body.skill == 'true' ? 1 : 0,
		luck: body.luck == 'true' ? 1 : 0,
		exc1: body.exc1 == 'true' ? 1 : 0,
		exc2: body.exc2 == 'true' ? 1 : 0,
		exc3: body.exc3 == 'true' ? 1 : 0,
		exc4: body.exc4 == 'true' ? 1 : 0,
		exc5: body.exc5 == 'true' ? 1 : 0,
		exc6: body.exc6 == 'true' ? 1 : 0
	};

	if (body.image_url) {
		receiptForm.image_url = body.image_url;
	}

	body.materials = JSON.parse(body.materials);

	const receipt = await Receipt.create(receiptForm);
	const materials = await Promise.map(body.materials, async item => {
		const materialForm = {
			receipt_id: receipt.id,
			name: item.name,
			count: item.count,
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
		const material = await Material.create(materialForm);
		return material;
	});

	const response = receipt.dataValues;
	response.materials = [];
	materials.forEach(item => {
		response.materials.push(item.dataValues);
	});

	return response;
};
