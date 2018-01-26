export default async Projects => {
  const projects = await Projects.find(
    {},
    { Name: true, StartTime: true, EndTime: true, Color: true, Technologies: true, Progress: true }
  );
  return projects;
};
