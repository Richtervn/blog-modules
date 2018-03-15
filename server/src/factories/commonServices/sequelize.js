import _ from 'underscore';

export default {
  create: async (model, body, { transform }) => {
    if (transform) {
      transform.forEach(field => {
        if (body[field] !== undefined) {
          body[field] = body[field] ? 1 : 0;
        }
      });
    }
    const record = await model.create(body);
  },
  delete: async (model, id) => {
    const priKey = model.primaryKeyAttribute;
    await model.destroy({ where: { [priKey]: id } });
    return { id };
  },
  deleteAll: async (model, query) => {
    await model.destroy({ where: query });
    return query;
  },
  getAll: async (model, query) => {
    const option = {};
    if (query) {
      option.where = {};
      for (let key in query) {
        option.where[query[key]] = { $like: `%${query[key]}` };
      }
      option.where = query;
    }
    const records = await model.findAll(option);
    return records;
  },
  getOne: async (model, id) => {
    const record = await model.findOne({ where: { [model.primaryKeyAttribute]: id } });
    return record;
  },
  update: async (model, body, { transform }) => {
    const priKey = model.primaryKeyAttribute;
    const updateForm = _.omit(body, [priKey]);
    if (transform) {
      transform.forEach(field => {
        if (updateForm[field] !== undefined) {
          updateForm[field] = body[field] ? 1 : 0;
        }
      });
    }
    await MembInfo.update(updateForm, { where: { [priKey]: body[priKey] } });
    return body;
  }
};
