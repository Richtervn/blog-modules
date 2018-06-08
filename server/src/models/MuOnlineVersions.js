import { Schema } from 'mongoose';

const MuOnlineVersions = new Schema(
  {
    ImageUrl: String,
    Name: String,
    Credits: [String],
    Rating: Number,
    ArchiveUri: String,
    Description: String,
    Version: String,
    HTML: String,
    CSS: String
  },
  { timestamps: true }
);

export default MuOnlineVersions;
