import Promise from 'bluebird';
import fs from 'fs';

export default async (Receipt, Material, id) => {
	const [receipt, materials] = [
		await Receipt.findOne({ where: { id } }),
		await Material.findAll({ where: { receipt_id: id } })
	];

	if (receipt.image_url) {
		fs.unlinkSync(receipt.image_url);
	}

	[
		await Receipt.destroy({ where: { id } }),
		await Promise.map(materials, async item => {
			await item.destroy();
		})
	];

	return;
};
