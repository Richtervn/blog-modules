import multer from 'multer';
import Promise from 'bluebird';

const srcPath = './public/Flash Games';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    let url = `${req.body.Name}.swf`;
    req.body.Uri = `${srcPath}/${url}`;
    cb(null, url);
  }
});

const upload = multer({ storage: storage }).single('File');

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;
