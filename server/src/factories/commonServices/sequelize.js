import _ from 'underscore';
import moment from 'moment';

export default {
  create: async (model, body, options) => {
    let transform;
    if (options) {
      transform = options.transform;
    }

    if (transform) {
      transform.forEach(field => {
        if (body[field] !== undefined) {
          body[field] = body[field] ? 1 : 0;
        }
      });
    }
    const record = await model.create(body);
    return record;
  },
  checkExist: async (model, field, value) => {
    const record = await model.findOne({ where: { [field]: value } });
    if (record) {
      return true;
    }
    return false;
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
  getAll: async (model, query, options) => {
    let option = {};
    if (query) {
      option.where = {};
      for (let key in query) {
        option.where[key] = { $like: `%${query[key]}%` };
      }
    }
    if (options) {
      option = { ...option, ...options };
    }
    const records = await model.findAll(option);
    return records;
  },
  getOne: async (model, id, options) => {
    let option = { where: { [model.primaryKeyAttribute]: id } };
    if (options) {
      option = { ...option, ...options };
    }
    const record = await model.findOne(option);
    return record;
  },
  update: async (model, body, options) => {
    let transform, returnNew;
    if (options) {
      transform = options.transform;
      returnNew = options.returnNew;
    }

    const priKey = model.primaryKeyAttribute;
    const updateForm = _.omit(body, [priKey]);
    if (transform) {
      transform.forEach(field => {
        if (updateForm[field] !== undefined) {
          updateForm[field] = body[field] ? 1 : 0;
        }
      });
    }
    await model.update(updateForm, { where: { [priKey]: body[priKey] } });
    if (returnNew) {
      const data = await model.findOne({ where: { [priKey]: body[priKey] } });
      return data;
    }
    return body;
  },
  uploadImage: (files, srcPath, fileField = 'file', suffix = '') => {
    if (!files) {
      return false;
    }
    if (!files[fileField]) {
      return false;
    }
    const file = files[fileField];
    const fileExt = file.name.slice(file.name.lastIndexOf('.'), file.name.length);
    const fileName = `${moment().format('MMDDYYYYhhmmss')}${suffix}${fileExt}`;
    const filePath = `${srcPath}/${fileName}`;
    file.mv(filePath);
    return filePath;
  }
};
