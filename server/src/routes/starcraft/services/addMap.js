export default async (StarcraftMaps, body) => {
  body.Tipntrick = body.Tipntrick.split(',');
  const mapSchema = new StarcraftMaps(body);
  const map = await mapSchema.save();
  return map;
}