import React, { Component } from 'react';
// import QuestCard from './QuestCard';

import socket from 'app/socketInstance';

const questIcons = {
  WQ01: 'wq-fill-form',
  WQ02: 'wq-add-points',
  WQ03: 'wq-reset',
  WQ04: 'wq-grand-reset',
  WQ05: 'wq-quest-reset',
  WQ06: 'wq-loan',
  WQ07: 'wq-pay',
  WQ08: 'wq-magic-gladiator',
  WQ09: 'wq-buy-credits',
  WQ10: 'wq-vip-account',
  WQ11: 'wq-vip-character',
  WQ12: 'wq-buy-webshop',
  WQ13: 'wq-make-credits',
  WQ14: 'wq-enhance-item',
  WQ15: 'wq-deposit',
  WQ16: 'wq-quest',
  WQ17: 'wq-recipe',
  WQ18: 'wq-craft'
};

class WebQuest extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onReceiveQuestList, onRefreshQuestList } = this.props;

    socket.on('darksteam97d99i/GET_WEB_QUEST_LIST_SUCCESS', questList => {
      onReceiveQuestList(questList);
    });

    socket.on('darksteam97d99i/CHECK_POINT_QUEST_SUCCESS', quest => {
      onRefreshQuestList(quest);
    });

    socket.on('darksteam97d99i/REQUEST_QUEST_REWARD_SUCCESS', quest => {
      onRefreshQuestList(quest);
    });
  }

  render() {
    const { questList, onRequestReward } = this.props;

    if (!questList) return null;

    return (
      <div className="ds9799-web-quest-container">
        <div className="row no-row-margin">
          {questList.filter(quest => quest.status != 'done').map(quest => (
            <div className="col-6 no-col-margin" key={quest._id}>
              <QuestCard
                quest={quest}
                icon={`/app_modules/images/icons/${questIcons[quest._id]}.jpg`}
                onRequestReward={onRequestReward}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// export default WebQuest;

// import React from 'react';

// export default ({ quest, icon, onRequestReward }) => (
//   <div
//     className={`ds9799-quest-card  ${quest.isDone ? 'ds9799-quest-card-completed' : ''}`}
//     onClick={() => {
//       if (quest.isDone) onRequestReward(quest._id);
//     }}>
//     <div className="row no-row-margin">
//       <div>
//         <img src={icon} className="ds9799-quest-card-icon" />
//       </div>
//       <div className="ds9799-quest-card-content">
//         <div className="ds9799-quest-card-title">{quest.description.replace('%(requirement)', quest.requirement)}</div>
//         <div className="ds9799-quest-card-subtitle">
//           {quest.rules.map((rule, i) => <i key={i}>{rule.replace('%(requirement)', quest.requirement)}</i>)}
//         </div>
//         <div className="progress ds9799-quest-progress">
//           <div
//             className={`progress-bar progress-bar-striped ${quest.progress < 100 ? 'progress-bar-animated' : ''}`}
//             style={{ width: `${quest.progress || 0}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );

