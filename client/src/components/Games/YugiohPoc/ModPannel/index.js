import React from 'react';
import ModCard from './ModCard';

const $ = window.$;
console.log($);
console.log($.isArray([]));


export default () => (
  <div className="text-center">
    <ModCard />
    <ModCard />
    <div className="ygo-add-mod-card">
      <div className="ygo-add-mod-card-icon" data-toggle="modal" data-target="#addYgoModModal">
        <i className="fa fa-plus-circle ygo-add-mod-card-button" />
      </div>
    </div>
    <div className="modal fade" id="addYgoModModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">dcm</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => $('#addYgoModModal').modal('hide')}
              data-dismiss="modal">
              Submit
            </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
