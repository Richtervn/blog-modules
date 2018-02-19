import FeatureBox from './FeatureBox.component';
import { connect } from 'react-redux';

import { changeCurrentFeature, changeSearch, changeSortKey, changeSortOption } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    currentFeature: starcraft.currentFeature,
    search: starcraft.search,
    sortKey: starcraft.sortKey,
    sortOption: starcraft.sortOption
  }),
  dispatch => ({
    onChangeCurrentFeature(feature) {
      dispatch(changeCurrentFeature(feature));
    },
    onChangeSearch(text) {
      dispatch(changeSearch(text));
    },
    onChangeSortKey(key) {
      dispatch(changeSortKey(key));
    },
    onChangeSortOption(option) {
      dispatch(changeSortOption(option));
    }
  })
)(FeatureBox);

// onSearchMap(text) {
//   dispatch(searchMap(text));
// },
// onSortMap(query) {
//   dispatch(sortMap(query));
// },

//     searchMap,
// sortMap
