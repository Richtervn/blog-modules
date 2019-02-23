import { Schema } from 'mongoose';

const Notebooks = new Schema(
  {
    Label: String,
    Content: String,
    CSS: String
  },
  { timestamps: true }
);

export default Notebooks;
