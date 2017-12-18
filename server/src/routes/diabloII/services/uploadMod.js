import multer from 'multer';
import Promise from 'bluebird';
import moment from 'moment';

const modPath = './public/DiabloII/Mods';
const iconPath = './public/DiabloII/Mods/Icons';
const backgroundPath = './public/DiabloII/Mods/Backgrounds';

const versions = ['1.08', '1.09', '1.10', '1.11', '1.12', '1.13', '1.14'];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let srcPath;
    if (file.fieldname == 'Archive') {
      versions.forEach(version => {
        if (file.originalname.indexOf(`LOD${version}`) != -1) {
          srcPath = `${modPath}/${version}`;
        }
      });
    }
    if (file.fieldname == 'Icon') srcPath = iconPath;
    if (file.fieldname == 'Background') srcPath = backgroundPath;
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    let name;
    if (file.fieldname == 'Icon') {
      name = moment().format('MMDDYYYYhhmmss') + '.jpg';
      req.body.IconUrl = `${iconPath}/${name}`;
    }
    if (file.fieldname == 'Archive') {
      versions.forEach(version => {
        if (file.originalname.indexOf(`LOD${version}`) != -1) {
          name = file.originalname.replace(`.LOD${version}`, '');
          req.body.ArchiveUrl = `${modPath}/${version}/${name}`;
        }
      });
    }
    if (file.fieldname == 'Background') {
      name = moment().format('MMDDYYYYhhmmss') + '.jpg';
      req.body.BackgroundUrl = `${backgroundPath}/${name}`;
    }
    cb(null, name);
  }
});

const upload = multer({ storage: storage }).fields([
  { name: 'Icon', maxCount: 1 },
  { name: 'Archive', maxCount: 1 },
  { name: 'Background', maxCount: 1 }
]);

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) return reject(err);
      return resolve(req.body);
    });
  });
};

export default multerUpload;
