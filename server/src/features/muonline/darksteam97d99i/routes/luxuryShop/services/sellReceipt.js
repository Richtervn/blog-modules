export default async (MembCredits, Receipt, UserReceipt, memb___id, receipId, GameSetting) => {
  const [membCredits, receipt] = [
    await MembCredits.findOne({ where: { memb___id } }),
    await Receipt.findOne({ where: { id: receipId } })
  ];

  const payBack = parseInt(receipt.price) * GameSetting.SELL_RECEIPT_RATIO;
  const remainCredits = parseInt(membCredits.credits) + payBack;
  await membCredits.update({ credits: remainCredits });
  await UserReceipt.destroy({
    where: {
      memb___id: memb___id,
      receipt_id: receiptId
    }
  });
  return { credits: remainCredits, receiptId };
};
