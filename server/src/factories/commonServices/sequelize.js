import _ from 'underscore';

export default {
  delete: async (model, id) => {
    const priKey = model.primaryKeyAttribute;
    await model.destroy({ where: { [priKey]: id } });
    return { id };
  },
  getAll: async (model, query) => {
    const option = {};
    if (query) {
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
