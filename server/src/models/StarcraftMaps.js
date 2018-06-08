import { Schema } from 'mongoose';

const StarcraftMaps = new Schema(
  {
    Name: String,
    Rating: Number,
    Matchup: String,
    Description: String,
    Tipntrick: [String],
    Uri: String
  },
  { timestamps: true }
);

export default StarcraftMaps;
