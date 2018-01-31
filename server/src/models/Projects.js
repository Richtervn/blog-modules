import { Schema } from 'mongoose';

const SubTask = new Schema({
  Label: String,
  IsDone: Boolean
});

const ProjectItem = new Schema({
  Label: String,
  Description: String,
  SubTasks: [SubTask],
  Tags: [String]
});

const TagColor = new Schema({
  Label: String,
  Color: String
});

const Projects = new Schema({
  Name: String,
  Technologies: [String],
  StartTime: Date,
  EndTime: Date,
  Color: String,
  TagColor: [TagColor],
  Plans: [ProjectItem],
  Doing: [ProjectItem],
  Done: [ProjectItem],
  Bugs: [ProjectItem]
});

export default Projects;
