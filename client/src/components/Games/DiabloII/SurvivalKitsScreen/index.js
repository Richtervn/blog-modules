import React, { Component } from 'react';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';
import StarRating from 'react-star-rating-component';

const $ = window.$;

const getIcon = type => {
  switch (type) {
    case 'Character':
      return '/app_modules/images/icons/d2-character.jpg';
    case 'Item':
      return '/app_modules/images/icons/d2-item.jpg';
    case 'Store':
      return '/app_modules/images/icons/d2-chest.jpg';
    default:
      return '/app_modules/images/icons/d2-chest.jpg';
  }
};

class SurvialKitsScreen extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentWillMount() {
    const { survivalKits, onGetSurvivalKits } = this.props;
    if (!survivalKits) {
      onGetSurvivalKits();
    }
  }

  handleEditClick(kit) {
    this.props.onSetFocusSurvivalKit(kit);
    $('#editD2SurvivalKitModal').modal('show');
  }

  handleDeleteClick(kit) {
    this.props.onSetFocusSurvivalKit(kit);
    $('#deleteD2SurvivalKitModal').modal('show');
  }

  render() {
    const {
      survivalKits,
      addFormState,
      editFormState,
      onAddSurvivalKit,
      onEditSurvivalKit,
      onDeleteSurvivalKit,
      focusSurvivalKit
    } = this.props;

    if (!survivalKits) {
      return null;
    }

    return (
      <div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
        {survivalKits.map(kit => (
          <div key={kit._id} className="col-4 no-col-margin">
            <div className="d2-ss-card">
              <div>
                <img src={getIcon(kit.Type)} style={{ width: '100px' }} />
              </div>
              <div className="text-center">
                <b>{kit.Name}</b>
                <div className="ygo-mod-card-rating" style={{width: '100%'}}>
                  <StarRating name={`d2kit-${kit._id}-rating`} editing={false} value={parseInt(kit.Rating)} />
                  {kit.Overview.map((text, i) => (
                    <span key={i} className="badge badge-danger">
                      {text}
                    </span>
                  ))}
                </div>
                <div className="text-left" style={{ padding: '5px' }}>
                  {kit.Description}
                </div>
              </div>
              <div className="d2-ss-card-feature">
                <div className="d2-ss-feature-btn" onClick={() => this.handleEditClick(kit)}>
                  <i className="fa fa-pencil" />
                </div>
                <div className="d2-ss-feature-btn" onClick={() => this.handleDeleteClick(kit)}>
                  <i className="fa fa-times" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-4 no-col-margin">
          <div className="d2-ss-add-card" data-toggle="modal" data-target="#addD2SurvivalKitModal">
            <i className="fa fa-plus-circle" />
          </div>
        </div>
        <FormModal id="addD2SurvivalKitModal" formBody={addFormState} onSubmit={(id, body) => onAddSurvivalKit(body)} />
        <FormModal
          id="editD2SurvivalKitModal"
          formBody={editFormState}
          onSubmit={(id, body) => onEditSurvivalKit(body)}
        />
        <DeleteModal
          id="deleteD2SurvivalKitModal"
          onSubmit={() => onDeleteSurvivalKit(focusSurvivalKit._id)}
          text={`Are you sure want to delete ${focusSurvivalKit.Name} ?`}
        />
      </div>
    );
  }
}

export default SurvialKitsScreen;
