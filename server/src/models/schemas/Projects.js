import { Schema } from 'mongoose';
import { required } from '../validators';

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

const Projects = new Schema(
  {
    Name: { type: String, required: required('Name'), unique: true },
    Technologies: { type: [String], validate: required('Technologies', true) },
    StartTime: Date,
    EndTime: Date,
    Color: { type: String, required: required('Color') },
    TagColor: [TagColor],
    Plans: [ProjectItem],
    Doing: [ProjectItem],
    Done: [ProjectItem],
    Bugs: [ProjectItem]
  },
  { timestamps: true }
);

export default Projects;
