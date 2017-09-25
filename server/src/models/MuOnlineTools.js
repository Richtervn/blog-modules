import {Schema} from 'mongoose';

const MuOnlineTools = new Schema({
  Name: String,
  Credits: [String],
  IconUrl: String,
  ArchiveUri: String,
  Rating: Number,
  Description: String,
  Introduce: String,
  Version: String
});

export default MuOnlineTools;