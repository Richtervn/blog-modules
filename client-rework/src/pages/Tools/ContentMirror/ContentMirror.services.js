import { serviceCaller } from 'helpers';

const { commonGet, commonPut } = serviceCaller;

export default {
  getTables() {
    const data = commonGet('tools/content_mirror/get_tables');
    return data;
  },
  getDocuments(collection) {
    const data = commonGet('tools/content_mirror/get_documents', [collection]);
    return data;
  },
  getDocument(tableName, docId) {
    const data = commonGet('tools/content_mirror/get_document', [tableName, docId]);
    return data;
  },
  saveCode(body) {
    const data = commonPut('tools/content_mirror/save_code', body);
    return data;
  }
};
