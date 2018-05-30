import fs from 'fs';

export default async (Consumable, body) => {
	const consumableForm = {
		name: body.name,
		price: body.price,
		itemId: body.itemId,
		option: body.option,
		level: body.level,
		category: body.category,
		duration: body.duration,
		luck: body.luck == true ? 1 : 0,
		skill: body.skill == true ? 1 : 0,
		exc1: body.exc1 == true ? 1 : 0,
		exc2: body.exc2 == true ? 1 : 0,
		exc3: body.exc3 == true ? 1 : 0,
		exc4: body.exc4 == true ? 1 : 0,
		exc5: body.exc5 == true ? 1 : 0,
		exc6: body.exc6 == true ? 1 : 0
	};

	const consumable = await Consumable.findOne({ where: { id: body.id }, attributes: ['image_url'] });
	if (body.image_url) {
		fs.unlinkSync(consumable.image_url);
		consumableForm.image_url = body.image_url;
	} else {
		body.image_url = consumable.image_url;
	}

	const result = await Consumable.update(consumableForm, { where: { id: body.id } });
	return result;
};
