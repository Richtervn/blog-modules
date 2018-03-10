import Promise from 'bluebird';

export default async (Receipt, Material) => {
	let receipts = await Receipt.findAll();
	receipts = await Promise.map(receipts, async receipt => {
		let receiptData = receipt.dataValues;
		let materials = await Material.findAll({ where: { receipt_id: receipt.id } });
		receiptData.materials = materials.map(item => item.dataValues);
		return receiptData;
	});
	return receipts;
};
