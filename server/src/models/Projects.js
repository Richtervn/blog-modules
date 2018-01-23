import { Schema } from 'mongoose';

const Projects = new Schema({
  Name: String,
  Technologies: [String],
  StartTime: Date,
  EndTime: Date,
  Progess: String,
  Color: String
});

export default Projects;
