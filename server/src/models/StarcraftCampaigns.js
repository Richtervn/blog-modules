import { Schema } from 'mongoose';

const StarcraftCampaigns = new Schema({
  Name: String,
  Rating: String,
  Matchup: String,
  Description: String,
  Introduction: Buffer,
  Version: String,
  Uri: String
});

export default StarcraftCampaigns;
