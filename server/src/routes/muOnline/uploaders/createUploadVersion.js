import moment from 'moment';

const archivePath = './public/Mu Online/Versions';
const imagesPath = './public/Mu Online/Images';

const destination = (req, file, cb) => {
  let srcPath;
  if (file.fieldname == 'Archive') srcPath = archivePath;
  if (file.fieldname == 'Image') srcPath = imagesPath;
  cb(null, srcPath);
};

const filename = (req, file, cb) => {
  let name;
  if (file.fieldname == 'Archive') {
    name = file.originalname;
    req.body.ArchiveUrl = `${archivePath}/${name}`;
  }
  if (file.fieldname == 'Image') {
    name = moment().format('MMDDYYYYhhmmss') + '.jpg';
    req.body.ImageUrl = `${imagesPath}/${name}`;
  }
  cb(null, name);
};

export default multerUpload => multerUpload.createMultipleUpload(destination, filename, ['Archive', 'Image']);
