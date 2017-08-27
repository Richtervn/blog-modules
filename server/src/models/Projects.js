import { Schema } from 'mongoose';

const Projects = new Schema({
  Name: String,
  Technology: String,
  Description: String,
  StartTime: Date,
  EndTime: Date,
  Status: String
});

export default Projects;
