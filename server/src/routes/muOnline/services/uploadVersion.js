import multer from 'multer';
import Promise from 'bluebird';

const srcPath = './public/Mu Online/Versions';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    const name = file.originalname;
    req.body.ArchiveUri = `${srcPath}/${name}`;
    req.body.Name = name;
    cb(null, name);
  }
});

const upload = multer({ storage: storage }).single('file');

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;