import multer from 'multer';
import Promise from 'bluebird';
import moment from 'moment';

const toolPath = './public/DiabloII/Tools';
const iconPath = './public/DiabloII/Tools/Icons';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let srcPath;
    if (file.fieldname == 'Icon') srcPath = iconPath;
    if (file.fieldname == 'Archive') srcPath = toolPath;
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    let name;
    if (file.fieldname == 'Icon') {
      name = moment().format('MMDDYYYYhhmmss') + '.jpg';
      req.body.IconUrl = `${iconPath}/${name}`;
    }
    if (file.fieldname == 'Archive') {
      name = file.originalname;
      req.body.ArchiveUrl = `${toolPath}/${name}`;
    }
    cb(null, name);
  }
});

const upload = multer({ storage: storage }).fields([{ name: 'Icon', maxCount: 1 }, { name: 'Archive', maxCount: 1 }]);

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;
