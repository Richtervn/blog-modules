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
  },
  getByParam: async (model, field, param) => {
    const docs = await model.find({ [field]: param });
    return docs;
  },
  getOne: async id => {
    const doc = await model.find({ _id: id });
    return doc;
  },
  update: async (model, body) => {
    let updateForm = { ...body };
    await model.update({ _id: body._id }, { $set: updateForm });
    return body;
  }
};
