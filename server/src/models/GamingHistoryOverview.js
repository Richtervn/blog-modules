import { Schema } from 'mongoose';

const SubSection = new Schema({
  Label: String,
  Content: String
});

const Section = new Schema({
  Label: String,
  Content: String,
  SubSections: [SubSection]
});

const GamingHistoryOverview = new Schema({
  GameId: String,
  Title: String,
  Priority: String,
  Description: String,
  Sections: [Section]
});

export default GamingHistoryOverview;
