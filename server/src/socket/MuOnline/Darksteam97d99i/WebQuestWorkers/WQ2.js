export default class WQ2 {
  constructor(models, methods, membInfo, characters, banking, membCredits, baseRecord) {
    this.webQuest = webQuest;
    this.baseRecord = baseRecord;
  }

  check() {
    if (this.baseRecord.progress < 100) {
      return false;
    }
    return true;
  }

  async checkPoint() {
    let currentRequirement = this.webQuest.requirement + this.baseRecord.finish_times * this.webQuest.step.requirement;
    
    this.baseRecord.update({
      progress: 0
    })
  }

  async giveReward() {
    let currentReward = this.webQuest.reward + this.baseRecord.finish_times * this.webQuest.step.reward;
  }
}

// {
//   "_id": "WQ2",
//   "description": "Use add points 10 times",
//   "reward": 50,
//   "requirement": 100,
//   "reward_unit": "Credits",
//   "rules": ["Points to add must be greater than %(requirement)"],
//   "isRepeatable": true,
//   "isJumpStep": true,
//   "step": {
//     "reward": 10,
//     "requirement": 100
//   },
//   "type": "Account"
// },

// id,
// memb___id,
// character_name,
// quest_id,
// finish_times,
// status,
// progress,
// type
