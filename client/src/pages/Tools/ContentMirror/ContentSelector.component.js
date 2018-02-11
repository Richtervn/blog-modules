import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class ContentSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { notFound: false, checkedRecord: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const {
      collectionValue,
      onGetDocuments,
      history,
      onChangeCollectionValue,
      onChangeDocumentValue,
      onGetDocument,
      table
    } = this.props;
    if (name === 'collection') {
      onGetDocuments(value);
      onChangeCollectionValue(value);
      history.push(`/content_mirror/${value}`);
    }
    if (name === 'document') {
      onChangeDocumentValue(value);
      onGetDocument(table, value);
      history.push(`/content_mirror/${collectionValue}/${value}`);
    }
  }

  componentWillMount() {
    const { table, onGetDocuments, onChangeCollectionValue } = this.props;
    if (table) {
      onChangeCollectionValue(table);
      onGetDocuments(table);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { table, record, onChangeDocumentValue, history, onGetDocument } = this.props;
    if (record && nextProps.documents && !this.state.checkedRecord) {
      const nextState = { checkedRecord: true };
      if (!nextProps.documents.find(doc => doc._id === parseInt(record, 10))) {
        nextState.notFound = true;
      }
      onChangeDocumentValue(record);
      onGetDocument(table, record);
      this.setState(nextState);
    }

    if (nextProps.collectionValue !== this.props.collectionValue && this.state.checkedRecord) {
      onChangeDocumentValue('default');
      history.push(`/content_mirror/${nextProps.collectionValue}`);
      this.setState({ checkedRecord: false });
    }
  }

  render() {
    const { tables, documents, documentValue, collectionValue } = this.props;
    if (this.state.notFound) {
      return <Redirect to="/404" />;
    }
    return [
      <select
        key="cl_s"
        className="form-control select"
        value={collectionValue}
        onChange={this.handleChange}
        name="collection">
        <option value="default" disabled hidden>
          Select Collection
        </option>
        {Object.keys(tables).map((table, i) => (
          <option key={i} value={table}>
            {table}
          </option>
        ))}
      </select>,
      <select
        key="dc_s"
        className="form-control select"
        value={documentValue}
        onChange={this.handleChange}
        name="document">
        <option value="default" disabled hidden>
          Select Document
        </option>
        {documents &&
          documents.map(doc => (
            <option key={doc._id} value={doc._id}>
              {doc[tables[collectionValue].DisplayField]}
            </option>
          ))}
      </select>
    ];
  }
}

export default withRouter(ContentSelector);
