import { Schema } from 'mongoose';

const DiabloIITools = new Schema({
  ArchiveUrl: String,
  Name: String,
  Description: String,
  Overview: [String],
  Rating: Number,
  IconUrl: String,
  HTML: String,
  CSS: String
});

export default DiabloIITools;
