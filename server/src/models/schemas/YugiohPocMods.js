import { Schema } from 'mongoose';

const YugiohPocMods = new Schema(
  {
    Name: String,
    Icon: String,
    Image: String,
    Credits: [String],
    Rating: Number,
    Description: String,
    Introduction: String
  },
  { timestamps: true }
);

export default YugiohPocMods;
