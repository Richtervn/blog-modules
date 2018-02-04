import Promise from 'bluebird';

export default async (Music, body) => {
  const ids = body.ids;
  await Promise.all([
    ids.map(id => {
      return Music.remove({ _id: id }).exec();
    })
  ]);
  return { ids };
};
