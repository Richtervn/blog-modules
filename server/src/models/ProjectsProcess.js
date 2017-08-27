import { Schema } from 'mongoose';

const ProjectsProcess = new Schema(
  {
    ProjectId: String,
    Content: String,
    Type: String,
    Status: String
  },
  { timestamps: true }
);

export default AppDiary;
