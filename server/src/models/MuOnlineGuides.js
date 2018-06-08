import { Schema } from 'mongoose';

const MuOnlineGuides = new Schema(
  {
    Name: String,
    Credits: [String],
    Rating: Number,
    ImageUrl: String,
    Description: String,
    HTML: String,
    CSS: String
  },
  { timestamps: true }
);

export default MuOnlineGuides;
