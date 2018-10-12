import { Schema } from 'mongoose';

const DiabloIISurvivalKits = new Schema(
  {
    Name: String,
    Type: String,
    FileUrl: String,
    Description: String,
    Overview: [String],
    Rating: Number
  },
  { timestamps: true }
);

export default DiabloIISurvivalKits;
