import { Schema } from 'mongoose';

const SubSection = new Schema({
  Label: String,
  Content: String
})

const Section = new Schema({
  Label: String,
  Content: String,
  SubSections: [SubSection]
})

const GamingHistoryAbout = new Schema({
  GameId: String,
  Info: Schema.Types.Mixed,
  Sections: [Section]
});

export default GamingHistoryAbout;
