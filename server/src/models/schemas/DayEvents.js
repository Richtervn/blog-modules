import { Schema } from 'mongoose';

const DayEvents = new Schema(
  {
    title: String,
    description: String,
    link: String,
    imageUrl: String,
    HTML: String,
    CSS: String,
    type: String,
    start: Date,
    end: Date,
    color: String,
    priority: Number
  },
  { timestamps: true }
);

export default DayEvents;
