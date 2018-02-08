import { connect } from 'react-redux';
import ContentSelector from './ContentSelector.component';

import { getDocuments, changeDocumentValue, changeCollectionValue } from '../ContentMirror.module';

export default connect(
  ({ contentMirror }) => ({
    tables: contentMirror.tables,
    documents: contentMirror.documents,
    documentValue: contentMirror.documentValue,
    collectionValue: contentMirror.collectionValue
  }),
  dispatch => ({
    onGetDocuments(collection) {
      dispatch(getDocuments(collection));
    },
    onChangeDocumentValue(doc) {
      dispatch(changeDocumentValue(doc));
    },
    onChangeCollectionValue(collection) {
      dispatch(changeCollectionValue(collection));
    }
  })
)(ContentSelector);
