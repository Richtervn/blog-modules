export default async (Projects, body) => {
  const project = await Projects.findOne({ _id: body.projectId });

  project[body.fromColumn] = project[body.fromColumn].filter(item => item._id != body.item._id);
  project[body.toColumn].push(body.item);

  const result = await project.save();

  return result;
};
