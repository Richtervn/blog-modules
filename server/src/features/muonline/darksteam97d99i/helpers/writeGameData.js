import readFile from '../../../../factories/utils/readFile';

const dataPath = './src/features/muonline/darksteam97d99i/data/';

export default async (name, data) => {
  await readFile(`${dataPath}${name}`, JSON.stringify(data, null, 2));
  return data;
};
