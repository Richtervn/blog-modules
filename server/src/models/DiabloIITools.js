import { Schema } from 'mongoose';

const DiabloIITools = new Schema({
  ArchiveUrl: String,
  Name: String,
  Description: String,
  Overview: [String],
  Rating: Number,
  IconUrl: String
});

export default DiabloIITools;
