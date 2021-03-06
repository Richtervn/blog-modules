import { Schema } from 'mongoose';

const MuOnlineTools = new Schema(
  {
    Name: String,
    Credits: [String],
    IconUrl: String,
    ArchiveUri: String,
    Rating: Number,
    Description: String,
    Version: String,
    HTML: String,
    CSS: String
  },
  { timestamps: true }
);

export default MuOnlineTools;
