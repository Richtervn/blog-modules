import Starcraft from 'components/Games/Starcraft';
import { connect } from 'react-redux';

import { changeSideListView, getMapList, setMapFocus, submitAddStarcraftMapForm, deleteMap } from 'modules/Games/starcraft';

export default connect(
  ({ forms, starcraft }) => ({
    SideListView: starcraft.viewControl.SideList,
    addMapFormState: forms.AddStarcraftMap,
    editMapFormState: forms.EditStarcraftMap,
    maps: starcraft.maps,
    mapFocus: starcraft.mapFocus
  }),
  dispatch => ({
    onNavigate(header) {
      dispatch(changeSideListView(header));
    },
    onAddMapSubmit(id, formBody) {
      dispatch(submitAddStarcraftMapForm(formBody));
    },
    onGetMapList() {
      dispatch(getMapList());
    },
    onSetMapFocus(map) {
      dispatch(setMapFocus(map));
    },
    onDeleteMap(id){
      dispatch(deleteMap(id));
    }
  })
)(Starcraft);
