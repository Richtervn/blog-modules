import multer from 'multer';
import Promise from 'bluebird';
import moment from 'moment';

const srcPath = './public/Yugioh Poc';

const fileFields = [
  { name: 'Icon', maxCount: 1 },
  { name: 'Image', maxCount: 1 }
];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    const name = moment().format('DDMMYYYYhhmmss') + '.jpg';
    req.body[file.fieldname] = `${srcPath}/${name}`;
    cb(null, `${saveName}_${file.fieldname}.jpg`);
  }
});

const upload = multer({ storage: storage }).fields(fileFields);

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;
