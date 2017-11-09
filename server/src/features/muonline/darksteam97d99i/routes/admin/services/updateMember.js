export default async (MembInfo, body) => {
	const updateForm = { ...body };
	delete updateForm.memb___id;
	updateForm.IsVip = body.IsVip ? 1 : 0;
	updateForm.mail_chek = body.mail_chek ? 1 : 0;
	await MembInfo.update(updateForm, { where: { memb___id: body.memb___id } });
	return body;
};
