import Starcraft from 'components/Games/Starcraft';
import { connect } from 'react-redux';

import {
  changeSideListView,
  getMapList,
  getModList,
  getCampaignList,
  getModDetail,
  getCampaignDetail,
  setMapFocus,
  setModFocus,
  setCampaignFocus,
  submitAddStarcraftMapForm,
  submitAddStarcraftModForm,
  submitAddStarcraftCampaignForm,
  submitEditStarcraftMapForm,
  submitEditStarcraftModForm,
  submitEditStarcraftCampaignForm,
  deleteMap,
  deleteMod,
  deleteCampaign
} from 'modules/Games/starcraft';

export default connect(
  ({ forms, starcraft }) => ({
    SideListView: starcraft.viewControl.SideList,
    addMapFormState: forms.AddStarcraftMap,
    editMapFormState: forms.EditStarcraftMap,
    addModFormState: forms.AddStarcraftMod,
    editModFormState: forms.EditStarcraftMod,
    addCampaignFormState: forms.AddStarcraftCampaign,
    editCampaignFormState: forms.EditCampaignFormState,
    maps: starcraft.maps,
    mods: starcraft.mods,
    campaigns: starcraft.campaigns,
    mapFocus: starcraft.mapFocus,
    modFocus: starcraft.modFocus,
    campaignFocus: starcraft.campaignFocus
  }),
  dispatch => ({
    onNavigate(header) {
      dispatch(changeSideListView(header));
    },
    onAddMapSubmit(id, formBody) {
      dispatch(submitAddStarcraftMapForm(formBody));
    },
    onEditMapSubmit(id, formBody) {
      dispatch(submitEditStarcraftMapForm(formBody));
    },
    onAddModSubmit(id, formBody) {
      dispatch(submitAddStarcraftModForm(formBody));
    },
    onEditModSubmit(id, formBody) {
      dispatch(submitEditStarcraftModForm(formBody));
    },
    onAddCampaignSubmit(id, formBody) {
      dispatch(submitAddStarcraftCampaignForm(formBody));
    },
    onEditCampaignSubmit(id, formBody) {
      dispatch(submitEditStarcraftCampaignForm(formBody));
    },
    onGetMapList() {
      dispatch(getMapList());
    },
    onGetModList() {
      dispatch(getModList());
    },
    onGetCampaignList() {
      dispatch(getCampaignList());
    },
    onGetModDetail(id) {
      dispatch(getModDetail(id));
    },
    onGetCampaignDetail(id) {
      dispatch(getCampaignDetail(id));
    },
    onSetMapFocus(map) {
      dispatch(setMapFocus(map));
    },
    onSetModFocus(mod) {
      dispatch(setModFocus(mod));
    },
    onSetCampaignFocus(campaign) {
      dispatch(setCampaignFocus(campaign));
    },
    onDeleteMod(id) {
      dispatch(deleteMod(id));
    },
    onDeleteCampaign(id) {
      dispatch(deleteCampaign(id));
    },
    onDeleteMap(id) {
      dispatch(deleteMap(id));
    }
  })
)(Starcraft);
