import { Schema } from 'mongoose';

const StarcraftMods = new Schema({
  Name: String,
  Rating: String,
  Description: String,
  Introduction: String,
  Version: String
});

export default StarcraftMods;
