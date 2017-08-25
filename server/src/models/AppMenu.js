import {Schema} from 'mongoose';

const AppMenu = new Schema({
  Collections: [String],
  Games: [String],
  'Flash Games': [String]
})

export default AppMenu;
