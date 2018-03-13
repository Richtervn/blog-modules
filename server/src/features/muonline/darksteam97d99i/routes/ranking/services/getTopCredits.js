import _ from 'underscore';

export default async models => {
  const { MembCredits } = models;
  const membCredits = await MembCredits.findAll();
  return _.sortBy(membCredits, 'credits').reverse();
};
