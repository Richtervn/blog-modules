export default async (Projects, body) => {
  const projectSchema = new Projects(body);
  const project = await projectSchema.save();
  return project;
};
