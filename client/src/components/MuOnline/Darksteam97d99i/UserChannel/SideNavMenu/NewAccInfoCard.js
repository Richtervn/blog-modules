import React from 'react';

export default ({info}) => <div className="ds9799-newacc-info-card text-center">
  <h4 style={{marginTop: '30px'}}><strong>New account will be rewarded with :</strong></h4>
  <h4><strong>{`${info.NEW_REGISTER_CREDIT} Credits`}</strong></h4>
  <h4><strong>{`${info.NEW_REGISTER_ZEN} Zen`}</strong></h4>
</div>