import Promise from 'bluebird';
import moment from 'moment';

const deleteFile = link => {
  new Promise((resolve, reject) => {
    fs.unlink(link, err => {
      if (err) return reject(err);
      resolve();
    });
  });
};

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
  delete: async (model, id, linkFields) => {
    const doc = await model.findOne({ _id: id });
    if (linkFields) {
      await Promise.map(linkFields, field => deleteFile(doc[field]));
    }
    if (!doc) return { message: 'Not found' };
    await model.remove({ _id: id }).exec();
    return { _id: doc._id };
  },
  getAll: async (model, options) => {
    const docs = await model.find({}, { ...options });
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
    const result = await model.findOneAndUpdate({ _id: body._id }, { $set: updateForm }, { new: true });
    if (linkFields) {
      await Promise.map(linkFields, field => {
        if (updateForm[field]) {
          return deleteFile(doc[field]);
        }
        return;
      });
    }
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
  uploadImage: (files, srcPath, fileField = 'file', suffix) => {
    if (!files) {
      return null;
    }
    if (!files[fileField]) {
      return null;
    }
    const filePath = `${srcPath}/${moment().format('MMDDYYYYhhmmss')}${suffix ? `/${suffix}` : null}.jpg`;
    files[fileField].mv(filePath);
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
  search: async (model, query, options) => {
    const regexQuery = {};
    for (let key in query) {
      regexQuery[key] = { $regex: query[key] };
    }
    const docs = await model.find(regexQuery, options);
    return docs;
  }
};
