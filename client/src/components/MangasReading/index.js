import React from 'react';
import Card from './Card';

export default () =>
  <div className="mangas-reading-main-screen">
    <div className="row no-row-margin">
      <div className="col static-position no-row-margin">
        <div className="mr-control-panel ">
          vcl
        </div>
      </div>
      <div className="col-9 static-position no-row-margin mr-card-list">
        <div className="row  no-row-margin">
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">
            <Card />
          </div>
        </div>
        <br />
        <div className="row  no-row-margin">
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">
            <Card />
          </div>
        </div>
        <br />
        <div className="row  no-row-margin">
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">
            <Card />
          </div>
          <div className="col static-position">

          </div>
        </div>
      </div>
    </div>
  </div>;
