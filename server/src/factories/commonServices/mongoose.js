import fs from 'fs';
import Promise from 'bluebird';
import moment from 'moment';
import deleteFile from '../utils/deleteFile';
import config from '../../config.json';

export default {
  create: async (model, body, arrayFields) => {
    let docBody = body;
    if (arrayFields) {
      arrayFields.forEach(field => {
        docBody[field] = docBody[field].split(',').map(prop => {
          if (typeof prop === 'string') {
            return prop.trim();
          }
          return prop;
        });
      });
    }
    const schema = new model(docBody);
    const doc = await schema.save();
    return doc;
  },
  delete: async (model, id, linkFields) => {
    const doc = await model.findOne({ _id: id });
    if (linkFields) {
      await Promise.map(linkFields, field => deleteFile(doc[field]));
    }
    if (!doc) return { message: 'Not found' };
    await model.remove({ _id: id }).exec();
    return { _id: doc._id };
  },
  getAll: async (model, options, sort) => {
    const docs = await model.find({}, { ...options }, { ...sort });
    return docs;
  },
  getByParam: async (model, field, param, options) => {
    const docs = await model.find({ [field]: param }, { ...options });
    return docs;
  },
  getOne: async (model, id) => {
    const doc = await model.findOne({ _id: id });
    return doc;
  },
  getOneByParam: async (model, option) => {
    const doc = await model.findOne(option);
    return doc;
  },
  update: async (model, body, arrayFields, linkFields) => {
    let updateForm = { ...body };
    if (arrayFields) {
      arrayFields.forEach(field => {
        if (body[field]) {
          updateForm[field] = body[field].split(',');
        }
      });
    }
    const doc = await model.findOne({ _id: body._id });
    if (linkFields) {
      await Promise.map(linkFields, field => {
        if (updateForm[field] && updateForm[field] !== 'null' && doc[field]) {
          if (updateForm[field].replace(`http://localhost:${config.port}`, './public') !== doc[field]) {
            return deleteFile(doc[field]);
          }
        }
        return;
      });
    }
    for (let key in updateForm) {
      doc[key] = updateForm[key];
    }
    const result = await doc.save();
    return result;
  },
  updateByParam: async (model, option, body, arrayFields) => {
    let updateForm = { ...body };
    if (arrayFields) {
      arrayFields.forEach(field => {
        if (body[field]) {
          updateForm[field] = body[field].split(',');
        }
      });
    }
    const result = await model.findOneAndUpdate(option, { $set: updateForm }, { new: true });
    return result;
  },
  uploadImage: (files, srcPath, fileField = 'file', suffix = '') => {
    if (!files) {
      return null;
    }
    if (!files[fileField]) {
      return null;
    }
    const file = files[fileField];
    const fileExt = file.name.slice(file.name.lastIndexOf('.'), file.name.length);
    const fileName = `${moment().format('MMDDYYYYhhmmss')}${suffix}${fileExt}`;
    const filePath = `${srcPath}/${fileName}`;
    file.mv(filePath);
    return filePath;
  },
  uploadArchive: (files, srcPath, fileField = 'file') => {
    if (!files) {
      return null;
    }
    if (!files[fileField]) {
      return null;
    }
    const file = files[fileField];
    const filePath = `${srcPath}/${file.name}`;
    file.mv(filePath);
    return filePath;
  },
  search: async (model, query, options, sort) => {
    const regexQuery = {};
    for (let key in query) {
      regexQuery[key] = { $regex: query[key] };
    }
    const docs = await model.find(regexQuery, options, sort);
    return docs;
  }
};
