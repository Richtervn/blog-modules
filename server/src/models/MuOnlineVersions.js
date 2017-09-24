import {Schema} from 'mongoose';

const MuOnlineVersions = new Schema({
  Name: String,
  Credits: [String],
  Rating: Number,
  ArchiveUri: String,
  Description: String,
  Introduce: String,
  Version: String
});

export default MuOnlineVersions;