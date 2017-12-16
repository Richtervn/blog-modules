import { Schema } from 'mongoose';

const DiabloIICharacters = new Schema({
  Name: String,
  Class: String,
  FileUrl: String,
  ModId: String,
  Overview: [String],
  Rating: Number,
  IsCount: Boolean
});

export default DiabloIICharacters;
