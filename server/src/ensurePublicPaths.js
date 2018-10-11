import Promise from 'bluebird';
import fs from 'fs';

const ensureDirectoryExist = async directory =>
  new Promise((resolve, reject) => {
    fs.stat(directory, (err, stats) => {
      if (err && err.errno === 34) {
        console.log(`Missing ${directory}`);
        fs.mkdir(directory, () => {
          return resolve();
        });
      } else {
        return resolve();
      }
    });
  });

const ensureDiabloIIPath = async () => {
  await ensureDirectoryExist('./public/DiabloII');
  ensureDirectoryExist('./public/DiabloII/Characters');
  ensureDirectoryExist('./public/DiabloII/Survial Kits');

  await ensureDirectoryExist('./public/DiabloII/Mods');
  ensureDirectoryExist('./public/DiabloII/Mods/1.08');
  ensureDirectoryExist('./public/DiabloII/Mods/1.09');
  ensureDirectoryExist('./public/DiabloII/Mods/1.10');
  ensureDirectoryExist('./public/DiabloII/Mods/1.11');
  ensureDirectoryExist('./public/DiabloII/Mods/1.12');
  ensureDirectoryExist('./public/DiabloII/Mods/1.13');
  ensureDirectoryExist('./public/DiabloII/Mods/1.14');
  ensureDirectoryExist('./public/DiabloII/Mods/Backgrounds');
  ensureDirectoryExist('./public/DiabloII/Mods/Icons');

  await ensureDirectoryExist('./public/DiabloII/Tools');
  ensureDirectoryExist('./public/DiabloII/Tools/Icons');
};

const ensureMuOnlinePath = async () => {
  await ensureDirectoryExist('./public/Mu Online');
  ensureDirectoryExist('./public/Mu Online/Guides');

  await ensureDirectoryExist('./public/Mu Online/Tools');
  ensureDirectoryExist('./public/Mu Online/Tools/Icons');

  await ensureDirectoryExist('./public/Mu Online/Versions');
  ensureDirectoryExist('./public/Mu Online/Versions/Images');

  await ensureDirectoryExist('./public/Mu Online/Darksteam97d99i');
  ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Generated Files');
  ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Web Shop');

  await ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Luxury Shop');
  ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Luxury Shop/Consumable');
  ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Luxury Shop/Exchange');
  ensureDirectoryExist('./public/Mu Online/Darksteam97d99i/Luxury Shop/Receipt');
};

const ensureStarcraftPath = async () => {
  await ensureDirectoryExist('./public/Starcraft');
  ensureDirectoryExist('./public/Starcraft/Campaigns');
  ensureDirectoryExist('./public/Starcraft/Maps');
  ensureDirectoryExist('./public/Starcraft/Mods');
};

const ensureYugiohPocPath = async () => {
  await ensureDirectoryExist('./public/Yugioh Poc');
  ensureDirectoryExist('./public/Yugioh Poc/decks');
  ensureDirectoryExist('./public/Yugioh Poc/mods');
};

export default async () => {
  ensureDirectoryExist('./public/Account');
  ensureDiabloIIPath();
  ensureDirectoryExist('./public/Flash Games');
  ensureDirectoryExist('./public/Gaming History');
  ensureDirectoryExist('./public/Mangas Reading');
  ensureDirectoryExist('./public/Music');
  ensureDirectoryExist('./public/Mangas Reading');
  ensureMuOnlinePath();
  ensureStarcraftPath();
};
