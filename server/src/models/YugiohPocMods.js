import { Schema } from 'mongoose';

const YugiohPocMods = new Schema({
  Name: String,
  Icon: String,
  Image: String,
  Credits: [String],
  Rating: String,
  Description: String,
  Introduction: String,
})

export default YugiohPocMods;