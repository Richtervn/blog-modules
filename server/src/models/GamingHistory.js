import { Schema } from 'mongoose';

const GamingHistory = new Schema({
  Name: String,
  CoverUri: String,
  Publishers: [String],
  Genres: [String],
  Periods: [String],
  Rating: Number
});

export default GamingHistory;
