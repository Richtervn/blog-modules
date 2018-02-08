import React, { Component } from 'react';
import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupSelect } from 'components/FormTools';
import { commonFormChange } from 'helpers';

// const GamingHistoryGuide = new Schema({
//   GameId: String,
//   Title: String,
//   Author: String,
//   Priority: String,
//   Source: String,
//   HTML: String,
//   CSS: String
// });

class GameGuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.edit ? this.initStateValue(this.props.game) : this.initStateValue() };
  }

  initStateValue(game) {
    const { gameInfo } = this.props;
    return {
      GameId: gameInfo._id,
      Title: game ? game.Title : '',
      Author: game ? game.Author : '',
      Priority: game ? game.Priority : '',
      Source: game ? game.Source : ''
    };
  }

  render() {
    return <div />;
  }
}

export default GameGuideForm;

// class GamingHistoryForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: this.props.edit ? this.initStateValue(this.props.game) : this.initStateValue() };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleRating = this.handleRating.bind(this);
//     this.handleAddArray = this.handleAddArray.bind(this);
//     this.handleRemoveArray = this.handleRemoveArray.bind(this);
//   }

//   initStateValue(stateValue) {
//     if (this.props.edit) {
//       return { ...stateValue };
//     }
//     return { ...initialValue };
//   }

//   handleSubmit() {
//     this.props.edit ? this.props.onEditGame(this.state.value) : this.props.onAddGame(this.state.value);
//     this.setState({ value: this.initStateValue() });
//     hideModal();
//   }

//   handleChange(event, index) {
//     const formValue = commonFormChange(this.state.value, event, index, ['Publishers', 'Genres', 'Periods']);
//     this.setState({
//       value: { ...formValue }
//     });
//   }

//   handleAddArray(name) {
//     const formValue = commonAddArray(this.state.value, name);
//     this.setState({
//       value: { ...formValue }
//     });
//   }

//   handleRating(value) {
//     this.setState({ value: { ...this.state.value, Rating: value } });
//   }

//   handleRemoveArray(name, index) {
//     const formValue = commonRemoveArray(this.state.value, name, index);
//     this.setState({
//       value: { ...formValue }
//     });
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.edit && nextProps.game._id !== this.props.game._id) {
//       this.setState({ value: this.initStateValue(nextProps.game) });
//     }
//   }

//   render() {
//     return [
//       <ModalHeader
//         key="gh_h"
//         iconUrl="/images/icons/gamepad.png"
//         label={this.props.edit ? `Update ${this.props.game.Name}` : 'Add New Favorite Game'}
//       />,
//       <div key="gh_b" className="modal-body">
//         <form className="text-right">
//           <FormGroupRow type="file" name="file" label="Cover Image" onChange={this.handleChange} />
//           <FormGroupRow
//             type="text"
//             label="Name"
//             name="Name"
//             onChange={this.handleChange}
//             value={this.state.value.Name}
//           />
//           <FormGroupArray
//             type="text"
//             label="Publishers"
//             arrayValues={this.state.value.Publishers}
//             onChange={this.handleChange}
//             name="Publishers"
//             onAdd={this.handleAddArray}
//             onRemove={this.handleRemoveArray}
//           />
//           <FormGroupArray
//             type="text"
//             label="Genres"
//             arrayValues={this.state.value.Genres}
//             onChange={this.handleChange}
//             name="Genres"
//             onAdd={this.handleAddArray}
//             onRemove={this.handleRemoveArray}
//           />
//           <FormGroupArray
//             type="text"
//             label="Periods"
//             arrayValues={this.state.value.Periods}
//             onChange={this.handleChange}
//             name="Periods"
//             onAdd={this.handleAddArray}
//             onRemove={this.handleRemoveArray}
//           />
//           <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
//         </form>
//       </div>,
//       <ModalFooter key="gh_f" onClickSubmit={() => this.handleSubmit()} />
//     ];
//   }
// }

// export default GamingHistoryForm;
