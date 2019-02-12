import { Schema } from 'mongoose';

const ScheludeEvents = new Schema(
  {
    title: String,
    description: String,
    start: Date,
    end: Date,
    priority: String
  },
  { timestamps: true }
);

export default ScheludeEvents;
