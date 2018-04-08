import readFile from '../../../../factories/utils/readFile';

const dataPath = './src/features/muonline/darksteam97d99i/data/game/';

export default async fileName => {
  const data = await readFile(`${dataPath}${fileName}.json`);
  return JSON.parse(data.toString());
};
