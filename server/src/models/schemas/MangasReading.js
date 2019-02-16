import { Schema } from 'mongoose';
import { required } from '../validators';

const MangasReading = new Schema(
  {
    Name: { type: String, required: required('Name'), unique: true },
    Aka: { type: [String], validate: required('Aka', true) },
    Authors: [String],
    Introduce: String,
    Chapter: String,
    Genre: [String],
    Rating: Number,
    CoverUri: String,
    ReadingUrl: String,
    Status: String,
    NewChapter: String
  },
  { timestamps: true }
);

export default MangasReading;
