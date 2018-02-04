import React, { Component } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating } from 'components/FormTools';

const initialFormValue = {
  File: null,
  Rating: 0,
  Genre: ''
};

class MusicForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: initialFormValue };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    const valueState = { ...this.state.value };
    switch (name) {
      case 'File':
        valueState.File = event.target.files[0];
        break;
      default:
        valueState[name] = value;
        break;
    }
    this.setState({ value: valueState });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
  }

  handleSubmit() {
    this.setState({ value: initialFormValue });
    this.props.onAddSong(this.state.value);
  }

  render() {
    return [
      <ModalHeader key="m_h" iconUrl="/images/icons/music.png" label="Add Favorite Song" />,
      <div key="m_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" onChange={this.handleChange} label="Mp3 File" />
          <FormGroupRating rating={this.state.value.Rating} label="Rating" onRating={this.handleRating} />
          <FormGroupRow
            type="text"
            name="Genre"
            onChange={this.handleChange}
            value={this.state.value.Genre}
            label="Genre"
          />
        </form>
      </div>,
      <ModalFooter key="m_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default MusicForm;
