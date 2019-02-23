import { Schema } from 'mongoose';

const BooksSchema = new Schema(
  {
    Label: String,
    Author: String,
    PublishDate: Date,
    FileUrl: String
  },
  { timestamps: true }
);

const BookShelves = new Schema(
  {
    Title: String,
    Books: [BooksSchema]
  },
  { timestamps: true }
);

export default BookShelves;
