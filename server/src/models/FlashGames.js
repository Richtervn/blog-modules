import { Schema } from 'mongoose';

const FlashGames = new Schema({
  Name: String,
  Uri: String,
  Width: Number,
  Height: Number,
  Guide: String
});

export default FlashGames;
