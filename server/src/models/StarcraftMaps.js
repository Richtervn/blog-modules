import { Schema } from 'mongoose';

const StarcraftMaps = new Schema({
  Name: String,
  Rating: String,
  Matchup: String,
  Description: String,
  Tipntrick: [String],
  Uri: String
});

export default StarcraftMaps;
