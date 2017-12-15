export default async (MembCredits, Receipt, UserReceipt, memb___id, receiptId, GameSetting) => {
  const [membCredits, receipt] = [
    await MembCredits.findOne({ where: { memb___id } }),
    await Receipt.findOne({ where: { id: receiptId } })
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


