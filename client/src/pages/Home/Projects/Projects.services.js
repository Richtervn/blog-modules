import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonDelete, commonPut } = serviceCaller;

export default {
  getProjects() {
    const data = commonGet('projects/get_all');
    return data;
  },
  getProjectDetail({ id }) {
    const data = commonGet('projects/get_detail', [id]);
    return data;
  },
  addProject({ formBody }) {
    const data = commonPost('projects/add', formBody);
    return data;
  },
  deleteProject({ id }) {
    const data = commonDelete(`projects/remove/${id}`);
    return data;
  },
  editProject({ formBody }) {
    const data = commonPut('projects/edit', formBody);
    return data;
  },
  updateSetting({ formBody }) {
    const data = commonPut('projects/setting', formBody);
    return data;
  },
  addProjectItem({ formBody }) {
    const data = commonPost('projects/add_item', formBody);
    return data;
  },
  moveCardToList({ formBody }) {
    const data = commonPut('projects/move_item', formBody);
    return data;
  },
  editItem({ formBody }) {
    const data = commonPut('projects/edit_item', formBody);
    return data;
  }
};
