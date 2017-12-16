import { Schema } from 'mongoose';

const DiabloIISurvivalKits = new Schema({
  Name: String,
  Type: String,
  FileUrl: String,
  Description: String,
  Overview: [String],
  Rating: Number
});

export default DiabloIISurvivalKits;
