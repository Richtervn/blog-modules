import { Schema } from 'mongoose';

const AppDiary = new Schema({
  ts: Date,
  text: String
});

export default AppDiary;
