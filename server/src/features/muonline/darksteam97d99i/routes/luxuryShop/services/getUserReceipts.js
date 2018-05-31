import _ from 'underscore';
import Promise from 'bluebird';

export default async (models, memb___id) => {
  const { UserReceipt, Receipt, Material } = models;
  const userReceipts = await UserReceipt.findAll({
    where: { memb___id }
  });
  let result = [];
  if (userReceipts.length > 0) {
    const userReceiptsId = _.pluck(userReceipts, 'receipt_id');
    result = await Receipt.findAll({
      where: { id: { $in: [userReceiptsId] } }
    });
    await Promise.map(result, async receipt => {
      let materials = await Material.findAll({ where: { receipt_id: receipt.id } });
      receipt.dataValues.materials = materials.map(material => material.dataValues);
      return receipt.dataValues;
    });
  }
  return result;
};
