export default async (models, memb___id, receiptId, GameSetting) => {
  const { MembCredits, Receipt, UserReceipt, UserCreditsLog } = models;

  const [membCredits, receipt] = [
    await MembCredits.findOne({ where: { memb___id } }),
    await Receipt.findOne({ where: { id: receiptId } })
  ];

  const payBack = parseInt(receipt.price) * GameSetting.SELL_RECEIPT_RATIO;
  const remainCredits = parseInt(membCredits.credits) + payBack;

  UserCreditsLog.create({
    memb___id: character.AccountID,
    description: `Sell ${receipt.name} receipt`,
    type: 'add',
    credits: payBack
  });

  await membCredits.update({ credits: remainCredits });
  await UserReceipt.destroy({
    where: {
      memb___id: memb___id,
      receipt_id: receiptId
    }
  });

  return { credits: remainCredits, receiptId };
};
