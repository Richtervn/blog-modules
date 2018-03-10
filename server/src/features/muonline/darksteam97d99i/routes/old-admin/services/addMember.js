export default async (models, body) => {
	const { MembInfo, ViCurInfo } = models;
	const account = await MembInfo.create(body);
	[
		await ViCurInfo.create({
			ends_days: '2005',
			chek_code: '1',
			used_time: 1234,
			memb___id: account.memb___id,
			memb_name: account.memb_name,
			memb_guid: account.memb_guid,
			sno__numb: account.sno__numb,
			Bill_Section: 6,
			Bill_Value: 3,
			Bill_Hour: 6,
			Surplus_Point: 6,
			Increase_Days: 0
		}),
		await Banking.create({
			memb___id: account.memb___id,
			zen_balance: 0,
			loan_money: 0
		}),
		await MembCredit.create({
			memb___id: account.memb___id,
			credits: 0
		})
	];
	return body;
};
