export default {
  create: async (model, body) => {
    const schema = new model(body);
    const doc = await schema.save();
    return doc;
  },
  getAll: async (model, options) => {
    const docs = await model.find({}, { ...options });
    return docs;
  },
  delete: async (model, id) => {
    const doc = await model.findOne({ _id: id });
    if (!doc) return { message: 'Not found' };
    await model.remove({ _id: id }).exec();
    return { _id: doc._id };
  },
  getByParam: async (model, field, param, options) => {
    const docs = await model.find({ [field]: param }, { ...options });
    return docs;
  },
  getOne: async (model, id) => {
    const doc = await model.findOne({ _id: id });
    return doc;
  },
  update: async (model, body) => {
    let updateForm = { ...body };
    await model.update({ _id: body._id }, { $set: updateForm });
    return body;
  },
  search: async (model, field, value, ignoreFields) => {
    const ignore = {};
    if (ignoreFields) {
      ignoreFields.forEach(field => (ignore[field] = false));
    }
    const docs = await model.find({ [field]: { $regex: value } }, ignore);
    return docs;
  }
};
