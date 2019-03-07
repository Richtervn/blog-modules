import { Schema } from 'mongoose';

/**
 * Type: enum ()
 */

const Notification = new Schema(
  {
    Label: String,
    Content: String,
    Type: String,
    ImageUrl: String
  },
  { timestamps: true }
);

export default Notification;
