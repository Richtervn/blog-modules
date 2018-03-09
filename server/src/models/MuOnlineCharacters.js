import { Schema } from 'mongoose';

const MuOnlineCharacters = new Schema({
  Name: String,
  Class: String,
  Description: String,
  Strength: Number,
  Agility: Number,
  Vitality: Number,
  Energy: Number,
  Invertory: String,
  Version: String,
  Rating: Number
});

export default MuOnlineCharacters;
