export default async (commonService, MangasReading, formBody) => {
  const conditions = [{ Name: formBody.Name }];
  if (formBody.Aka) {
    conditions.push({
      Aka: {
        $all: formBody.Aka.slice(0)
          .split(',')
          .map(aka => aka.trim())
      }
    });
  }

  const existManga = await MangasReading.findOne({
    $or: conditions
  });

  if (existManga) {
    console.log(existManga);
    return { message: 'Manga existed!' };
  }

  const manga = await commonService.create(MangasReading, formBody, ['Aka', 'Authors', 'Genre']);
  return manga;
};
