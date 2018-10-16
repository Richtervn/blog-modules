import { Schema } from 'mongoose';
import { required } from '../validators';

const GamingHistory = new Schema(
  {
    Name: { type: String, required: required('Name'), unique: true },
    CoverUri: { type: String, required: required('Cover'), unique: true },
    BackgroundUri: { type: String, required: required('Background'), unique: true },
    Publishers: { type: [String], validate: required('Publishers', true) },
    Genres: { type: [String], validate: required('Genres', true) },
    Periods: { type: [String], validate: required('Periods', true) },
    Rating: Number
  },
  { timestamps: true }
);

export default GamingHistory;
