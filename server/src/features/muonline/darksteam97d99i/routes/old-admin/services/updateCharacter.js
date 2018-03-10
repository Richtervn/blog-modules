export default async (Character, body) => {
	const updateForm = { ...body };
	updateForm.IsVip == true ? '1' : '0';
	updateForm.IsMarried == true ? '1' : '0';
	await Character.update(updateForm, { where: { Name: body.Name } });
	return body;
};
