import serviceCaller from 'factories/serviceCaller';

const {
  commonPostMultiplePart,
  commonPutMultiplePart,
  commonGet,
  commonPut,
  commonDelete,
  commonPost,
  commonBlob
} = serviceCaller;

export default {
  getMapList() {
    const data = commonGet('starcraft/list_map');
    return data;
  },
  getModList() {
    const data = commonGet('starcraft/list_mod');
    return data;
  },
  getCampaignList() {
    const data = commonGet('starcraft/list_campaign');
    return data;
  },
  getModDetail(id) {
    const data = commonBlob('starcraft/mod', [id]);
    return data;
  },
  getCampaignDetail(id) {
    const data = commonBlob('starcraft/mod', [id]);
    return data;
  },
  addMap(formBody) {
    const data = commonPostMultiplePart('starcraft/add_map', formBody);
    return data;
  },
  addMod(formBody) {
    const data = commonPost('starcraft/add_mod', formBody);
    return data;
  },
  addCampaign(formBody) {
    const data = commonPost('starcraft/add_campaign', formBody);
    return data;
  },
  editCampaign(formBody) {
    const data = commonPut('starcraft/edit_campaign', formBody);
    return data;
  },
  editMod(formBody) {
    const data = commonPut('starcraft/edit_mod', formBody);
    return data;
  },
  editMap(formBody) {
    const data = commonPutMultiplePart('starcraft/edit_map', formBody);
    return data;
  },
  deleteMap(id) {
    const data = commonDelete('starcraft/remove_map/' + id);
    return data;
  },
  deleteMod(id) {
    const data = commonDelete('starcraft/remove_mod/' + id);
    return data;
  },
  deleteCampaign(id) {
    const data = commonDelete('starcraft/remove_campaign/' + id);
    return data;
  }
};
