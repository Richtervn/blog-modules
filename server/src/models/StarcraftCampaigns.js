import { Schema } from 'mongoose';

const StarcraftCampaigns = new Schema({
  Name: String,
  Rating: Number,
  Matchup: String,
  Description: String,
  Version: String,
  HTML: String,
  CSS: String,
  Uri: String
});

export default StarcraftCampaigns;
