import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonPut, commonDelete, commonPost } = serviceCaller;

export default {
  getMaps() {
    const data = commonGet('starcraft/maps');
    return data;
  },
  getMods() {
    const data = commonGet('starcraft/mods');
    return data;
  },
  getCampaigns() {
    const data = commonGet('starcraft/campaigns');
    return data;
  },
  getModDetail({ id }) {
    const data = commonGet('starcraft/mod', [id]);
    return data;
  },
  getCampaignDetail({ id }) {
    const data = commonGet('starcraft/campaign', [id]);
    return data;
  },
  addMap({ formBody }) {
    const data = commonPostMultiplePart('starcraft/map', formBody);
    return data;
  },
  addMod({ formBody }) {
    const data = commonPost('starcraft/mod', formBody);
    return data;
  },
  addCampaign({ formBody }) {
    const data = commonPostMultiplePart('starcraft/campaign', formBody);
    return data;
  },
  editCampaign({ formBody }) {
    const data = commonPut('starcraft/campaign', formBody);
    return data;
  },
  editMod({ formBody }) {
    const data = commonPut('starcraft/mod', formBody);
    return data;
  },
  editMap({ formBody }) {
    const data = commonPutMultiplePart('starcraft/map', formBody);
    return data;
  },
  deleteMap({ id }) {
    const data = commonDelete('starcraft/map/' + id);
    return data;
  },
  deleteMod({ id }) {
    const data = commonDelete('starcraft/mod/' + id);
    return data;
  },
  deleteCampaign({ id }) {
    const data = commonDelete('starcraft/campaign/' + id);
    return data;
  },
  searchMap({ text }) {
    const data = commonGet('starcraft/search_map', null, { Name: text });
    return data;
  },
  searchMod({ text }) {
    const data = commonGet('starcraft/search_mod', null, { Name: text });
    return data;
  },
  searchCampaign({ text }) {
    const data = commonGet('starcraft/search_campaign', null, { Name: text });
    return data;
  }
};
