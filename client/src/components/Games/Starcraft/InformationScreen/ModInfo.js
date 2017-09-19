import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

export default ({ mod, onEditModSubmit, editModFormState, onDeleteMod }) => {
  if (!mod.Name) {
    return null;
  }
  return (
    <div className="sc-green-box">
      <h3 style={{ paddingTop: '20px' }}>
        <strong>{mod.Name.toUpperCase()}</strong>
      </h3>
      <div className="sc-map-info-feature">
        <button
          className="sc-map-feature-btn"
          data-toggle="modal"
          data-target="#editStarcraftModModal">
          <i className="fa fa-pencil" />
        </button>
        <button
          className="sc-map-feature-btn"
          data-toggle="modal"
          data-target="#deleteStarcraftModModal">
          <i className="fa fa-times" />
        </button>
      </div>
      <div className="larger-star-rating">
        <StarRating
          name={mod.Name}
          value={parseInt(mod.Rating)}
          editing={false}
        />
      </div>
      <div
        className="sc-green-box text-jusify"
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
        <strong>Description : </strong>
        {mod.Description}
      </div>
      <div
        className="sc-green-box text-jusify"
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
        <strong>Introduction : </strong>
        <div
          style={{ paddingLeft: '20px' }}
          dangerouslySetInnerHTML={{ __html: mod.Introduction.data.toString() }}
        />
      </div>
      <FormModal
        id="editStarcraftModModal"
        formBody={editModFormState}
        onSubmit={onEditModSubmit}
      />
      <DeleteModal
        id="deleteStarcraftMapModal"
        text={`Hey man, make sure you want to delete ${mod.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteMod(mod._id)}
      />
    </div>
  );
};
