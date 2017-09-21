import {Schema} from 'mongoose';

const GamingHistory = new Schema({
  Name: String,
  Publisher: String,
  Periods: [String],
  Rating: Number,
  CoverUri: String,
  Introduce: String
});

export default GamingHistory;