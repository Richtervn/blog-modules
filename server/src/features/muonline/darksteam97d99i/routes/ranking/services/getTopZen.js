import _ from 'underscore';
import Promise from 'bluebird';

export default async models => {
  const { MembInfo, Character, Banking } = models;
  const accounts = await MembInfo.findAll({ attributes: ['memb___id'] });
  const result = await Promise.map(accounts, async account => {
    const [characters, banking] = [
      await Character.findAll({ where: { AccountId: account.memb___id }, attributes: ['Money'] }),
      await Banking.findOne({ where: { memb___id: account.memb___id }, attributes: ['zen_balance'] })
    ];
    let totalZen = parseInt(banking.zen_balance);
    characters.forEach(character => {
      totalZen += character.Money;
    });
    return { memb___id: account.memb___id, TotalZen: totalZen };
  });

  return _.sortBy(result, 'TotalZen').reverse();
};
