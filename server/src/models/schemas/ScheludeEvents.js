import { Schema } from 'mongoose';

const ScheludeEvents = new Schema(
  {
    title: String,
    description: String,
    url: String,
    imageUrl: String,
    HTML: String,
    CSS: String,
    start: Date,
    end: Date,
    priority: String
  },
  { timestamps: true }
);

export default ScheludeEvents;
