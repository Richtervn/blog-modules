export default async (Character, body) => {
	const characterForm = { ...body };
	characterForm.IsVip == true ? '1' : '0';
	characterForm.IsMarried == true ? '1' : '0';
	const character = await Character.create(characterForm);
	return character;
};
