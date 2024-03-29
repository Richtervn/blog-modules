import { Schema } from 'mongoose';

const YugiohPocDecks = new Schema(
  {
    ModId: String,
    Name: String,
    Image: String,
    Rating: Number,
    Description: String,
    Pros: [String],
    Cons: [String],
    Winrate: Number
  },
  { timestamps: true }
);

export default YugiohPocDecks;
