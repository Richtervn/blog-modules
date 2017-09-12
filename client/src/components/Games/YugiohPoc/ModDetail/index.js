import React from 'react';
import TabNavBar from 'components/TabNavBar';

export default ({ mod }) => (
  <div className="static-position">
    <TabNavBar headers={['About', 'Decks']} type="ygo" id={mod._id} />
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane active" id={`tabygo${mod._id}About`}>
        aaa
      </div>
      <div role="tabpanel" className="tab-pane fade" id={`tabygo${mod._id}Decks`}>
        bbb
      </div>
    </div>
  </div>
);

// <div className="tab-content">
//   <div role="tabpanel" className="tab-pane active" id="tabProfile">
//     <Profile/>
//   </div>
//   <div role="tabpanel" className="tab-pane fade" id="tabProjects">bbb</div>
//   <div role="tabpanel" className="tab-pane fade" id="tabAppDiary">ccc</div>
// </div>
