import { connect } from 'react-redux';
import PDFViewer from './PDFViewer.component';

export default connect(({ library }) => ({
  book: library.book
}))(PDFViewer);
