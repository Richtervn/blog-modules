import _ from 'underscore';
import './ProviderForm.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import { FormGroupRow } from 'components/FormTools';
import { ModalHeader, ModalFooter } from 'components/Modal';

import { hideModal } from 'common/Modal';

const initialValue = {
  RssUrl: [{ Url: '', Category: '' }],
  Provider: '',
  Site: ''
};

class ProviderForm extends Component {
  constructor(props) {
    super(props);
    const { edit, provider } = this.props;
    this.state = {
      value: edit ? this.initStateValue({ ...provider }) : this.initStateValue({ ...initialValue }),
      error: {}
    };
  }

  initStateValue(provider) {
    return { ...provider, RssUrl: provider.RssUrl.slice(0) };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.provider._id !== this.props.provider._id) {
      this.setState({ value: this.initStateValue(nextProps.provider) });
    }
  }

  handleAddRssUrl() {
    const { value } = this.state;
    value.RssUrl.push({ Url: '', Category: '' });
    this.setState({ value });
  }

  handleRemoveRssUrl(i) {
    const { value } = this.state;
    if (value.RssUrl.length > 0) {
      value.RssUrl.splice(i, 1);
    } else {
      value.RssUrl = [{ Url: '', Category: '' }];
    }
    this.setState({ value });
  }

  handleChange(e, i) {
    const { value } = this.state;
    if (_.contains(['Category', 'Url'], e.target.name)) {
      value.RssUrl[i][e.target.name] = e.target.value;
    } else {
      value[e.target.name] = e.target.value;
    }
    this.setState({ value });
  }

  handleSubmit() {
    const { value } = this.state;
    const error = {};

    if (!value.Provider) {
      error.Provider = true;
    }
    if (!value.Site) {
      error.Site = true;
    }
    value.RssUrl.forEach((rssUrl, i) => {
      ['Url', 'Category'].forEach(field => {
        if (!rssUrl[field]) {
          if (!error.RssUrl) {
            error.RssUrl = [];
          }
          error.RssUrl.push({
            field,
            index: i
          });
        }
      });
    });
    if (!_.isEmpty(error)) {
      this.setState({ error });
      return;
    }

    const { edit, onAdd, onEdit, provider } = this.props;
    if (edit) {
      const formBody = {
        _id: provider._id,
        ...this.state.value
      };
      onEdit(formBody);
    } else {
      onAdd(this.state.value, () => {
        this.setState({
          value: this.initStateValue({ ...initialValue, RssUrl: initialValue.RssUrl.map(obj => ({ ...obj })).slice(0) })
        });
      });
    }

    hideModal();
  }

  getValidateClass(field, i) {
    const { value, error } = this.state;
    const hasError = error.RssUrl && error.RssUrl.some(obj => obj.field === field && obj.index === i);
    return hasError ? 'is-invalid' : !!value.RssUrl[i][field] ? 'is-valid' : null;
  }

  render() {
    const { error, value: { Provider, Site, RssUrl } } = this.state;
    const { edit, provider } = this.props;
    return [
      <ModalHeader
        key="p_h"
        iconUrl="/images/icons/rss.png"
        label={edit ? `Edit ${provider.Provider}` : 'Add New Provider'}
      />,
      <div key="p_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            label="Provider"
            name="Provider"
            onChange={e => this.handleChange(e)}
            value={Provider}
            error={error.Provider}
          />
          <FormGroupRow
            type="text"
            label="Site"
            name="Site"
            onChange={e => this.handleChange(e)}
            value={Site}
            error={error.Site}
          />
          <div className="form-group row">
            <div className="col-sm-3 rss-url-label">
              <label className="col-form-label col-form-label-sm">Rss :</label>
              <button className="btn btn-primary btn-sm" onClick={() => this.handleAddRssUrl()} type="button">
                Add
              </button>
            </div>
            <div className="col-sm-9 rss-url-inputs">
              {RssUrl.map((rssUrl, i) => (
                <div className="inputs-wrapper" key={i}>
                  <input
                    type="text"
                    className={classnames('form-control form-control-sm', this.getValidateClass('Url', i))}
                    name="Url"
                    value={RssUrl[i].Url}
                    onChange={e => this.handleChange(e, i)}
                    placeholder="Url"
                  />
                  <input
                    type="text"
                    className={classnames('form-control form-control-sm', this.getValidateClass('Category', i))}
                    name="Category"
                    value={RssUrl[i].Category}
                    onChange={e => this.handleChange(e, i)}
                    placeholder="Category"
                  />
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleRemoveRssUrl(i)} type="button">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>,
      <ModalFooter key="a_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default ProviderForm;
