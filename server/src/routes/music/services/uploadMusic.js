import multer from 'multer';
import Promise from 'bluebird';

const srcPath = './public/Music';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, srcPath);
  },
  filename(req, file, cb) {
    const name = file.originalname;
    const fragments = file.originalname.split(' - ');
    req.body.Artist = fragments[0].trim();
    req.body.Name = fragments[1].replace('.mp3', '').trim();
    req.body.Url = `${srcPath}/${name}`;
    cb(null, name);
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
