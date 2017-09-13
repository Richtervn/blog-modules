import React from 'react';

export default ({ activeTab }) => (
  <div className="ml-auto" style={{ display: 'inline-flex' }}>
    <li className="nav-item" style={{ marginRight: '5px', marginTop: '5px' }}>
      <button data-toggle="modal" data-target={activeTab == 'Mod' ? '#editYgoModModal' : '#editYgoDeckModal'}>
        <i className="fa fa-pencil" />
      </button>
    </li>
    <li className="nav-item" style={{ marginRight: '5px', marginTop: '5px' }}>
      <button
        data-toggle="modal"
        data-target={activeTab == 'Mod' ? '#deleteYgoModModal' : '#deleteYgoDeckModal'}>
        <i className="fa fa-times" />
      </button>
    </li>
  </div>
);
