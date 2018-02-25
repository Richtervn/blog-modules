import { Schema } from 'mongoose';

const DiabloIIMods = new Schema({
  ArchiveUrl: String,
  Name: String,
  ModVersion: String,
  Version: String,
  IconUrl: String,
  Overview: [String],
  HTML: String,
  CSS: String,
  Rating: Number
});

export default DiabloIIMods;
