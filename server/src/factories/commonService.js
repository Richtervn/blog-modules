export default {
  create: async (model, body, arrayFields) => {
    let docBody = body;
    if (arrayFields) {
      arrayFields.forEach(field => {
        docBody[field] = docBody[field].split(',');
      });
    }
    const schema = new model(docBody);
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
  update: async (model, body, arrayFields) => {
    let updateForm = { ...body };
    if (arrayFields) {
      arrayFields.forEach(field => {
        updateForm[field] = body[field].split(',');
      });
    }
    await model.update({ _id: body._id }, { $set: updateForm });
    return body;
  },
  search: async (model, query, options) => {
    const regexQuery = {};
    for (let key in query) {
      regexQuery[key] = { $regex: query[key] };
    }
    const docs = await model.find(regexQuery, options);
    return docs;
  }
};
