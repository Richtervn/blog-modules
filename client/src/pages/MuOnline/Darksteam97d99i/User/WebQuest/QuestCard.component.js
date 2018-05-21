import './QuestCard.css';
import React from 'react';
import classnames from 'classnames';

export default ({ quest, icon, onRequestReward }) => (
  <div
    className={classnames('ds9799-quest-card', { done: quest.isDone })}
    onClick={() => {
      if (quest.isDone) onRequestReward(quest._id);
    }}>
    <div className="img-wrapper">
      <img src={icon} alt="quest-icon" />
    </div>
    <div className="content">
      <div className="title">{quest.description.replace('%(requirement)', quest.requirement)}</div>
      <div className="subtitle">
        {quest.rules.map((rule, i) => <i key={i}>{rule.replace('%(requirement)', quest.requirement)}</i>)}
      </div>
      <div className="progress">
        <div
          className={`progress-bar progress-bar-striped ${quest.progress < 100 ? 'progress-bar-animated' : ''}`}
          style={{ width: `${quest.progress || 0}%` }}
        />
      </div>
      <div className="quest-info">
        <div className="icon-wrapper">
          <img
            src={quest.reward_unit === 'Credits' ? '/images/icons/cash.png' : '/images/icons/gold-coins.png'}
            alt="reward-type"
          />
          <div className={quest.reward_unit === 'Credits' ? 'rw credits' : 'rw zen'}>{quest.reward.toLocaleString()}</div>
        </div>
        {quest.isRepeatable && (
          <div className="repeatable">
            <i className="fa fa-refresh" />
            <span>{quest.finish_times}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);
