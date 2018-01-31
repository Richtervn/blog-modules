export default async (Projects, body) => {
  let project = await Projects.findOne({ _id: body.projectId });
  project[body.Column] = project[body.Column].map(item => {
    if (item._id == body.item._id) {
      return body.item;
    }
    return item;
  });
  const savedProject = await project.save();

  let result = savedProject[body.Column].find(item => item._id == body.item._id);
  result = JSON.parse(JSON.stringify(result));
  result.Column = body.Column;
  return result;
};
