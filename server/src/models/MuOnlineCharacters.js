import { Schema } from 'mongoose';

const MuOnlineCharacters = new Schema({
  Name: String,
  Class: String,
  Strength: Number,
  Agility: Number,
  Vitality: Number,
  Energy: Number,
  Invertory: String,
  Version: String
});

export default MuOnlineCharacters;
