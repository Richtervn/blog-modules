import { Schema } from 'mongoose';

const StarcraftMods = new Schema(
  {
    Name: String,
    Rating: Number,
    Description: String,
    Version: String,
    HTML: String,
    CSS: String
  },
  { timestamps: true }
);

export default StarcraftMods;
