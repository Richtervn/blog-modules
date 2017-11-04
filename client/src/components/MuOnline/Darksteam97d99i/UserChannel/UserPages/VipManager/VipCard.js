import React from 'react';

export default ({item, onBuyVip}) => (
  <div className="ds9799-vip-package">
    <div className="row no-row-margin">
      <div className="col-8 no-col-margin text-center">
        <b>{item.name}</b><br/>
        <div>{`Price : ${item.price} credits`}</div>
      </div>
      <div className="col-4 no-col-margin">
        <button className="btn btn-danger btn-full" onClick={() => onBuyVip(item)}>BUY</button>
      </div>
    </div>
  </div>
)