import { Schema } from 'mongoose';

const YugiohPocDecks = new Schema({
  ModId: String,
  Name: String,
  Image: String,
  Rating: String,
  Description: String,
  Pros: [String],
  Cons: [String]
})

export default YugiohPocDecks;