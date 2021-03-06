export default async (Consumable, body) => {
	const consumableForm = {
		name: body.name,
		price: body.price,
		itemId: body.itemId,
		category: body.category,
		duration: body.duration,
		luck: body.luck == true ? 1 : 0,
		skill: body.skill == true ? 1 : 0,
		option: body.option,
		level: body.level,
		exc1: body.exc1 == true ? 1 : 0,
		exc2: body.exc2 == true ? 1 : 0,
		exc3: body.exc3 == true ? 1 : 0,
		exc4: body.exc4 == true ? 1 : 0,
		exc5: body.exc5 == true ? 1 : 0,
		exc6: body.exc6 == true ? 1 : 0
	};

	if (body.image_url) {
		consumableForm.image_url = body.image_url;
	}

	const result = await Consumable.create(consumableForm);
	return result;
};
