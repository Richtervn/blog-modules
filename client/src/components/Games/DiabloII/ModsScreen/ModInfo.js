import React from 'react';
import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

export default ({ mod, editFormState, onEditMod, onDeleteMod }) => {
  if (!mod.Name) {
    return (
      <div className="d2-mod-info-screen flex-center-both">
        <h4 style={{ color: 'gray' }}>
          <i>No mod selected</i>
        </h4>
      </div>
    );
  }

  const style = {
    backgroundSize: 'cover'
  };

  if (mod.BackgroundUrl) {
    style.backgroundImage = `url(${mod.BackgroundUrl.replace('./public', 'http://localhost:3000')})`;
  }

  return (
    <div className="d2-mod-info-screen" style={style}>
      <div className="d2-mod-info-overlay">
        <div className="mo-info-feature">
          <button className="mo-info-feature-btn" data-toggle="modal" data-target="#editD2ModModal">
            <i className="fa fa-pencil" />
          </button>
          <button className="mo-info-feature-btn" data-toggle="modal" data-target="#deleteD2ModModal">
            <i className="fa fa-times" />
          </button>
        </div>
        <h3 style={{ paddingTop: '20px' }}>{`${mod.Name} v${mod.ModVersion}`}</h3>
        <StarRating
          className="larger-star-rating"
          name={`d2mod-${mod._id}-rating`}
          value={parseInt(mod.Rating)}
          editing={false}
        />
        <br />
        <img src={`${mod.IconUrl.replace('./public', 'http://localhost:3000')}`} />
        <h6 className="mgt-5">{`LOD Version : ${mod.Version}`}</h6>
        <div style={{ marginTop: '25px' }}>
          <b>Overview :</b>
        </div>
        <div className="flex-center-both pdt-20">
          <ul style={{ textAlign: 'left' }}>{mod.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
        </div>
        {mod.Description && (
          <div className="mgt-15">
            <b>Description :</b>
          </div>
        )}
        {mod.Description && <div dangerouslySetInnerHTML={{ __html: mod.Description }} style={{ padding: '10px' }} />}

        <FormModal id="editD2ModModal" formBody={editFormState} onSubmit={(id, body) => onEditMod(body)} />
        <DeleteModal
          id="deleteD2ModModal"
          onSubmit={() => onDeleteMod(mod._id)}
          text={`Are you sure want to delete ${mod.Name} v${mod.ModVersion}`}
        />
      </div>
    </div>
  );
};
