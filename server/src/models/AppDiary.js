import { Schema } from 'mongoose';

const AppDiary = new Schema({
  ts: String,
  text: String
});

export default AppDiary;
