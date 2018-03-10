import readFile from '../../../../factories/utils/readFile';

export default async name => {
  let filepath = '';
  switch (name) {
    case 'GameSetting':
      filepath = './src/features/muonline/darksteam97d99i/configs/GameSetting.json';
      break;
    case 'ServerInfo':
      filepath = './src/features/muonline/darksteam97d99i/configs/ServerInfo.json';
      break;
    default:
      break;
  }

  const data = await readFile(filepath);
  return JSON.parse(data.toString());
};
