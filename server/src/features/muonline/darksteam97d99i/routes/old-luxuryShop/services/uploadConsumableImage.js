// import multer from 'multer';
// import Promise from 'bluebird';
// import moment from 'moment';

// const srcPath = './public/Mu Online/Darksteam97d99i/Luxury Shop/Consumable';

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, srcPath);
//   },
//   filename(req, file, cb) {
//     const name = moment().format('MMDDYYYYhhmmss') + '.jpg';
//     req.body.image_url = `${srcPath}/${name}`;
//     cb(null, name);
//   }
// });

// const upload = multer({ storage: storage }).single('file');

// const multerUpload = (req, res) => {
//   return new Promise((resolve, reject) => {
//     upload(req, res, err => {
//       if (err) return reject(err);
//       return resolve(req.body);
//     });
//   });
// };

// export default multerUpload;
