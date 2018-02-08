import { Schema } from 'mongoose';

const GamingHistoryGuide = new Schema({
  GameId: String,
  Title: String,
  Author: String,
  Priority: String,
  Source: String,
  HTML: String,
  CSS: String
});

export default GamingHistoryGuide;
