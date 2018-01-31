const columns = ['Plans', 'Doing', 'Done', 'Bugs'];

export default async Projects => {
  const projects = await Projects.find();

  const result = projects.map(project => {
    let totalTasks = 0;
    let finishedTasks = 0;

    columns.forEach(column => {
      project[column].forEach(item => {
        const subTasks = item.SubTasks.filter(subTask => subTask.Label !== '');
        subTasks.forEach(subTask => {
          totalTasks++;
          if (subTask.IsDone) {
            finishedTasks++;
          }
        });
      });
    });

    project.Progress = finishedTasks / totalTasks * 100;
    if (isNaN(project.Progress)) {
      project.Progress = 0;
    }

    return {
      _id: project._id,
      Name: project.Name,
      StartTime: project.StartTime,
      EndTime: project.EndTime,
      Color: project.Color,
      Technologies: project.Technologies,
      Progress: project.Progress
    };
  });
  return result;
};
