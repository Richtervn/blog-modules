import { Schema } from 'mongoose';

const ProjectItem = new Schema({
  Label: String,
  Description: String,
  SubTasks: [String],
  Tags: [String]
});

const TagColor = new Schema({
  Label: String,
  Color: String
})

const Projects = new Schema({
  Name: String,
  Technologies: [String],
  StartTime: Date,
  EndTime: Date,
  Progress: String,
  Color: String,
  TagColor: [TagColor],
  Plans: [ProjectItem],
  Doing: [ProjectItem],
  Done: [ProjectItem],
  Bugs: [ProjectItem]
});

export default Projects;
