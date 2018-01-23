export default async (Projects, body) => {
  body.Technologies = body.Technologies.split(',');
  const projectSchema = new Projects(body);
  const project = await projectSchema.save();
  return project;
};
