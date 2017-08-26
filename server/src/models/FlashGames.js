import {Schema} from 'mongoose';

const FlashGames = new Schema({
  Name: String,
  Uri: String
});

export default FlashGames;