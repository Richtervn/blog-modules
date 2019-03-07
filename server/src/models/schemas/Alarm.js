import { Schema } from 'mongoose';

/**
 * Block: unix duration
 * Type: enum (MANUAL_REAPEATABLE)
 */

const Alarm = new Schema({
  Title: String,
  Block: Number ,
  Description: String,
  Type: String
});

export default Alarm;
