export default async (MembInfo, query) => {
	const options = { where: {} };
	if (query.memb___id) {
		options.where.memb___id = { $like: `%${query.memb___id}%` };
	}
	const accounts = await MembInfo.findAll(options);
	return accounts;
};
