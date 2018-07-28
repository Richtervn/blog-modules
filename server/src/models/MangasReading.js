import { Schema } from 'mongoose';

const MangasReading = new Schema(
  {
    Name: String,
    Aka: [String],
    Authors: [String],
    Introduce: String,
    Chapter: String,
    Genre: [String],
    Rating: Number,
    CoverUri: String,
    ReadingUrl: String,
    Status: String
  },
  { timestamps: true }
);

export default MangasReading;
