import { Schema } from 'mongoose';
import { required } from '../validators';

const Rss = new Schema({
  Url: { type: String, required: required('Rss Link') },
  Category: { type: String, required: required('Category') }
});

const RssProvider = new Schema(
  {
    RssUrl: [Rss],
    Provider: { type: String, required: required('Provider') },
    Site: { type: String, required: required('Site') }
  },
  { timestamps: true }
);

export default RssProvider;
