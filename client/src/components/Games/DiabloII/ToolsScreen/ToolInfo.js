import React from 'react';
import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

export default ({ tool, editFormState, onEditTool, onDeleteTool }) => {
  if (!tool.Name) {
    return (
      <div className="d2-mod-info-screen flex-center-both">
        <h4 style={{ color: 'gray' }}>
          <i>No tool selected</i>
        </h4>
      </div>
    );
  }

  return (
    <div className="d2-mod-info-screen">
      <div className="d2-mod-info-overlay">
        <div className="mo-info-feature">
          <button className="mo-info-feature-btn" data-toggle="modal" data-target="#editD2ToolModal">
            <i className="fa fa-pencil" />
          </button>
          <button className="mo-info-feature-btn" data-toggle="modal" data-target="#deleteD2ToolModal">
            <i className="fa fa-times" />
          </button>
        </div>
        <h3 style={{ paddingTop: '20px' }}>{tool.Name}</h3>
        <StarRating
          className="larger-star-rating"
          name={`d2tool-${tool._id}-rating`}
          value={parseInt(tool.Rating)}
          editing={false}
        />
        <br />
        <img src={`${tool.IconUrl.replace('./public', 'http://localhost:3000')}`} />
        <div style={{marginTop: '25px'}}><b>Overview :</b></div>
        <div className="flex-center-both pdt-20">
          <ul style={{ textAlign: 'left' }}>{tool.Overview.map((text, i) => <li key={i}>{text}</li>)}</ul>
        </div>
        <div className="mgt-15"><b>Description :</b></div>
        <div dangerouslySetInnerHTML={{ __html: tool.Description }} style={{padding: '10px'}}/>
        <FormModal id="editD2ToolModal" formBody={editFormState} onSubmit={(id, body) => onEditTool(body)} />
        <DeleteModal
          id="deleteD2ToolModal"
          onSubmit={() => onDeleteTool(tool._id)}
          text={`Are you sure want to delete ${tool.Name}`}
        />
      </div>
    </div>
  );
};
