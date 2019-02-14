import { Schema } from "mongoose";

const ScheludeEvents = new Schema(
  {
    title: String,
    description: String,
    link: String,
    imageUrl: String,
    HTML: String,
    CSS: String,
    start: Date,
    end: Date,
    color: String,
    priority: Number
  },
  { timestamps: true }
);

export default ScheludeEvents;
