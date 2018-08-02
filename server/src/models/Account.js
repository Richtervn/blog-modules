import { Schema } from 'mongoose';

const Account = new Schema({
  Username: String,
  Password: String,
  LogInMethod: String,
  Icon: String,
  Color: String,
  SiteName: String
});

export default Account;
