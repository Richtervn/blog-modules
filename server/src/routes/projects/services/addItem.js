export default async (Projects, body) => {
  const project = await Projects.findOne({ _id: body._id });
  project[body.columnKey].push({
    Label: body.Label,
    Description: body.Description,
    SubTasks: body.SubTasks,
    Tags: body.Tags
  });
  const result = await project.save();
  return result;
};
