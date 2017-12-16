import { Schema } from 'mongoose';

const DiabloIIMods = new Schema({
  ArchiveUrl: String,
  Name: String,
  ModVersion: String,
  Version: String,
  BackgroundUrl: String,
  IconUrl: String,
  Overview: [String],
  Description: String,
  Rating: Number
});

export default DiabloIIMods;
