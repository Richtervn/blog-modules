import { Schema } from 'mongoose';

const FlashGames = new Schema(
  {
    Name: String,
    Uri: String,
    Width: Number,
    Height: Number,
    Guide: String
  },
  { timestamps: true }
);

export default FlashGames;
