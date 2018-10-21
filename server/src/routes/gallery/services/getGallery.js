const galleryPath = './public/Gallery';

export default async factories => {
  const { readdir } = factories;
  const result = [];
  const albums = await readdir(galleryPath);
  await Promise.all(
    albums.map(async album => {
      const images = await readdir(`${galleryPath}/${album}`);
      result.push({ album, images: images.map(image => `${galleryPath}/${album}/${image}`) });
    })
  );
  return result;
};
