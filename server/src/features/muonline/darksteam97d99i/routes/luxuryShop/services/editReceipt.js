import _ from 'underscore';
import Promise from 'bluebird';

export default async (Receipt, Material, body, deleteFile) => {
	const [oldMaterials, receipt] = [
		await Material.findAll({ where: { receipt_id: body.id }, attributes: ['id'] }),
		await Receipt.findOne({ where: { id: body.id } })
	];

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

	if (body.materials) {
		body.materials = JSON.parse(body.materials);
	}

	if (body.image_url) {
		receiptForm.image_url = body.image_url;
		if (receipt.image_url) {
			await deleteFile(receipt.image_url);
		}
	} else {
		body.image_url = receiptForm.image_url;
	}

	const newMaterialsId = _.pluck(body.materials, 'id');

	oldMaterials.forEach(async item => {
		if (!_.contains(newMaterialsId, item.dataValues.id)) {
			await Material.destroy({ where: { id: item.dataValues.id } });
		}
	});

	await Receipt.update(receiptForm, { where: { id: body.id } });

	body.materials = await Promise.map(body.materials, async item => {
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

		if (item.id) {
			await Material.update(materialForm, { where: { id: item.id } });
			materialForm.id = item.id;
			return materialForm;
		} else {
			const material = await Material.create(materialForm);
			return material.dataValues;
		}
	});

	return body;
};
