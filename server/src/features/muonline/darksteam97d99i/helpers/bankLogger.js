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

export default async (record, profit, indept) => {
  const historyFile = './src/features/muonline/bank_history.json';
  const profitFile = './src/features/muonline/bank_profit.json';

  const profitForm = {};
  if (profit) {
    profitForm.profit = currentProfit.profit + profit;
    profitForm.indept = currentProfit.indept;
  }
  if (indept) {
    if(record.type == 'Loan'){
      profitForm.indept = currentProfit.indept + indept;
    }
    if(record.type == 'Deposit'){
      profitForm.indept = currentProfit.indept - indept;
    }
  }

  history.push(record);
  await writeFile(historyFile, JSON.stringify(history, null, 2));

  if (profit || indept) {
    await writeFile(profitFile, JSON.stringify(profitForm, null, 2));
  }
  return;
};
