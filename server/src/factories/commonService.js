export default {
  create: async (model, body) => {
    const schema = new model(body);
    const doc = await schema.save();
    return doc;
  },
  getAll: async model => {
    const docs = await model.find();
    return docs;
  },
  delete: async (model, id) => {
    const doc = await model.findOne({ _id: id });
    if (!doc) return { message: 'Not found' };
    await model.remove({ _id: id }).exec();
    return { _id: doc._id };
  }
};
