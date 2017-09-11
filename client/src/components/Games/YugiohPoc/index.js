import React from 'react';

import ModPannel from './ModPannel';

export default () =>
<div className="ygo-main-screen">
  <div className="row no-row-margin">
    <div className="col-2 no-col-margin ygo-mod-pannel">
      <ModPannel/>
    </div>
    <div className="col-7 no-col-margin" style={{backgroundColor: 'blue'}}>as
    </div>
    <div className="col no-col-margin" style={{backgroundColor: 'green'}}>as
    </div>
  </div>
</div>;
