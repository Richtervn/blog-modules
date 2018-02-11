import { connect } from 'react-redux';
import ContentSelector from './ContentSelector.component';

import { getDocuments, changeDocumentValue, changeCollectionValue, getDocument } from './ContentMirror.module';

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
    onGetDocument(collectionId, docId) {
      dispatch(getDocument(collectionId, docId));
    },
    onChangeDocumentValue(doc) {
      dispatch(changeDocumentValue(doc));
    },
    onChangeCollectionValue(collection) {
      dispatch(changeCollectionValue(collection));
    }
  })
)(ContentSelector);
