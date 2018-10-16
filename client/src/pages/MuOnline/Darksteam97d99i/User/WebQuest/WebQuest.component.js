import './WebQuest.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';
import QuestCard from './QuestCard.component';

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
  componentWillMount() {
    this.props.onGetQuestList();
  }

  render() {
    const { questList, onRequestQuestReward } = this.props;

    if (!questList) return <ContainerLoader />;

    return (
      <div id="ds9799-web-quest">
        {questList.filter(quest => quest.status !== 'done').map(quest => (
          <div className="wrapper" key={quest._id}>
            <QuestCard
              quest={quest}
              icon={`/images/icons/${questIcons[quest._id]}.jpg`}
              onRequestReward={onRequestQuestReward}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default WebQuest;
