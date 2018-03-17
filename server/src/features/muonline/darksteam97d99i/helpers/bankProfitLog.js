import getData from './getData';
import writeData from './writeData';

export default async (profit, indept, type) => {
  const bankProfit = await getData('BankProfit');
  if (profit) {
    bankProfit.profit += profit;
  }
  if (indept) {
    if (type === 'add') {
      bankProfit.indept += indept;
    } else {
      bankProfit.indept -= indept;
    }
  }
  await writeData('BankProfit', bankProfit);
  return bankProfit;
};
