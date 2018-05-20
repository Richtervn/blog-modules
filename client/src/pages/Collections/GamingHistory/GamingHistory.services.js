import { serviceCaller } from 'helpers';

const { commonGet, commonPostMultiplePart, commonPutMultiplePart, commonDelete, commonPost, commonPut } = serviceCaller;

export default {
  getList() {
    const data = commonGet('gaming_history/get_list');
    return data;
  },
  addGame({ formBody }) {
    const data = commonPostMultiplePart('gaming_history/add_game', formBody);
    return data;
  },
  editGame({ formBody }) {
    const data = commonPutMultiplePart('gaming_history/edit_game', formBody);
    return data;
  },
  deleteGame({ id }) {
    const data = commonDelete('gaming_history/delete_game/' + id);
    return data;
  },
  getAbout({ gameId }) {
    const data = commonGet('gaming_history/get_about', [gameId]);
    return data;
  },
  editAbout({ formBody }) {
    const data = commonPut('gaming_history/edit_about', formBody);
    return data;
  },
  getGuides({ gameId }) {
    const data = commonGet('gaming_history/get_guides', [gameId]);
    return data;
  },
  getOverviews({ gameId }) {
    const data = commonGet('gaming_history/get_overviews', [gameId]);
    return data;
  },
  getGuide({ id }) {
    const data = commonGet('gaming_history/get_guide', [id]);
    return data;
  },
  getOverview({ id }) {
    const data = commonGet('gaming_history/get_overview', [id]);
    return data;
  },
  addGuide({ formBody }) {
    const data = commonPost('gaming_history/add_guide', formBody);
    return data;
  },
  addOverview({ formBody }) {
    const data = commonPost('gaming_history/add_overview', formBody);
    return data;
  },
  editGuide({ formBody }) {
    const data = commonPut('gaming_history/edit_guide', formBody);
    return data;
  },
  editOverview({ formBody }) {
    const data = commonPut('gaming_history/edit_overview', formBody);
    return data;
  },
  deleteGuide({ id }) {
    const data = commonDelete('gaming_history/delete_guide' + id);
    return data;
  },
  deleteOverview({ id }) {
    const data = commonDelete('gaming_history/delete_overview' + id);
    return data;
  }
};
