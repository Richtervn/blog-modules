import { Schema } from 'mongoose';

const AppDiary = new Schema(
  {
    Component: String,
    Content: String
  },
  { timestamps: true }
);

export default AppDiary;
