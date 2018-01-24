import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonDelete, commonPut } = serviceCaller;

export default {
  getProjects() {
    const data = commonGet('projects/get_all');
    return data;
  },
  addProject(formBody) {
    const data = commonPost('projects/add', formBody);
    return data;
  },
  deleteProject(id) {
    const data = commonDelete(`projects/remove/${id}`);
    return data;
  },
  editProject(formBody) {
    const data = commonPut('projects/edit', formBody);
    return data;
  }
};
