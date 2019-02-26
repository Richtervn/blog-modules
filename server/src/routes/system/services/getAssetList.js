const clientImagesPath = "./../client/public/images";

export default async factories => {
	const { readdir } = factories;
	const [icons, backgrounds] = [
		await readdir(`${clientImagesPath}/icons`),
		await readdir(`${clientImagesPath}/backgrounds`)
	];
	return { backgrounds, icons };
};
