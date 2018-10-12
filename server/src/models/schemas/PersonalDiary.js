import { Schema } from 'mongoose';

const PersonalDiary = new Schema(
  {
    Type: String,
    Content: String
  },
  { timestamps: true }
);

export default PersonalDiary;
