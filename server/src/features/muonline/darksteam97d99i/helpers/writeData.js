import writeFile from '../../../../factories/utils/writeFile';

export default async (name, data) => {
  let filepath = '';
  switch (name) {
    case 'GameSetting':
      filepath = './src/features/muonline/darksteam97d99i/configs/GameSetting.json';
      break;
    case 'ServerInfo':
      filepath = './src/features/muonline/darksteam97d99i/configs/ServerInfo.json';
      break;
    case 'WebQuests':
      filepath = './src/features/muonline/darksteam97d99i/data/app/QuestList.json';
      break;
    case 'BankProfit':
      filepath = './src/features/muonline/darksteam97d99i/data/app/BankProfit.json';
      break;
    default:
      break;
  }

  await writeFile(filepath, JSON.stringify(data, null, 2));
  return data;
};
