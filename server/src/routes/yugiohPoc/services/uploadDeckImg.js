import multer from 'multer';
import Promise from 'bluebird';
import moment from 'moment';

const srcPath = './public/Yugioh Poc/decks';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    const name = moment().format('MMDDYYYYhhmmss') + '.jpg';
    req.body.Image = `${srcPath}/${name}`;
    cb(null, name);
  }
});

const upload = multer({ storage: storage }).single('Image');

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;
