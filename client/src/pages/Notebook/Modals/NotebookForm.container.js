import { connect } from 'react-redux';
import NotebookForm from './NotebookForm.component';

import { addNotebook, editNotebook } from '../Notebook.module';

export default connect(
  ({ notebook }) => ({
    notebook: notebook.notebook
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addNotebook(formBody));
    },
    onEdit(formBody) {
      dispatch(editNotebook(formBody));
    }
  })
)(NotebookForm);
