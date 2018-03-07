import multer from 'multer';
import Promise from 'bluebird';

export default {
  createSingleUpload(srcPath, filename, field) {
    const storage = multer.diskStorage({
      destination(req, file, cb) {
        cb(null, srcPath);
      },
      filename
    });

    const upload = multer({ storage }).single(field);

    return (req, res) => {
      return new Promise((resolve, reject) => {
        upload(req, res, err => {
          if (err) return reject(err);
          return resolve(req.body);
        });
      });
    };
  },

  createMultipleUpload(destination, filename, fields) {
    const uploadOptions = fields.map(field => {
      return {
        name: field,
        maxCount: 1
      };
    });
    
    const storage = multer.diskStorage({ destination, filename });
    const upload = multer({ storage: storage }).fields(uploadOptions);

    return (req, res) => {
      return new Promise((resolve, reject) => {
        upload(req, res, err => {
          if (err) return reject(err);
          return resolve(req.body);
        });
      });
    };
  }
};
