import { Schema } from 'mongoose';

const Music = new Schema(
  {
    Name: String,
    Artist: String,
    Rating: Number,
    Genre: String,
    Lyrics: String,
    Url: String
  },
  { timestamps: true }
);

export default Music;
