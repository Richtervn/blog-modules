import fs from 'fs';
import Promise from 'bluebird';

import history from '../../bank_history';
import currentProfit from '../../bank_profit';

const writeFile = (link, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(link, content, err => {
      if (err) return reject(err);
      resolve(content);
    });
  });

export default async (record, profit) => {
  const historyFile = './src/features/muonline/bank_history.json';
  const profitFile = './src/features/muonline/bank_profit.json';
  [
    await writeFile(historyFile, JSON.stringify(history.push(record), null, 2)),
    await writeFile(currentProfit, JSON.stringify(currentProfit.profit + profit), null, 2)
  ];
  return;
};
