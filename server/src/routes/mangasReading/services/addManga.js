export default async (MangasReading, body) => {
  body.Aka = body.Aka.split(',');
  body.Authors = body.Authors.split(',');
  body.Genre = body.Genre.split(',');
  const manga = new MangasReading(body);
  const doc = await manga.save();
  return doc;
}