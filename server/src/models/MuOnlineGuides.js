import { Schema } from 'mongoose';

const MuOnlineGuides = new Schema({
  Name: String,
  Credits: [String],
  Rating: Number,
  ImageUrl: String,
  Description: String,
  HTML: String,
  CSS: String
});

export default MuOnlineGuides;
