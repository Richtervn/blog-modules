import { Schema } from 'mongoose';

const DiabloIICharacters = new Schema({
  Name: String,
  Title: String,
  Class: String,
  Level: Number,
  FileUrl: String,
  ModId: String,
  Overview: [String],
  Rating: Number,
  IsCount: Boolean
});

export default DiabloIICharacters;
