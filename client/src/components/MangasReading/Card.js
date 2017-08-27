import React from 'react';

export default () =>
  <div className="card" style={{ width: '300px' }}>

    <h4 style={{ position: 'absolute', color: 'white' }}>dcm</h4>
    <div>
    <img src="http://localhost:3000/Profile/test.jpg"/>
    </div>

    <div className="card-block static-position">
      <h4 className="card-title static-position">Card title</h4>
      <p className="card-text static-position">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>;
