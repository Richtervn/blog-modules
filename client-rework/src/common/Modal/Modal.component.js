import React from 'react';
import { Modal } from 'components/Modal';

import { FlashGamesForm } from 'pages/FlashGames';

export default ({ name }) => {
  const additionProps = {};

  return (
    <Modal {...additionProps}>
      {name === 'FlashGame' && <FlashGamesForm />}
      {name === 'EditFlashGame' && <FlashGamesForm edit/>}
    </Modal>
  );
};

// state = {

//   AddYugiohMod: {
//     Name: '',
//     Icon: null,
//     Image: null,
//     Credits: [''],
//     Rating: 0,
//     Description: '',
//     Introduction: ''
//   },
//   AddYugiohDeck: {
//     ModId: '',
//     Name: '',
//     Image: null,
//     Rating: 0,
//     Description: '',
//     Pros: [''],
//     Cons: [''],
//     Winrate: 0
//   },
//   EditYugiohMod: null,
//   EditYugiohDeck: null,
//   AddMusic: {
//     File: null,
//     Rating: 0,
//     Genre: ''
//   },
//   AddStarcraftMap: {
//     Rating: 0,
//     File: null,
//     Matchup: '',
//     Description: '',
//     Tipntrick: ['']
//   },
//   EditStarcraftMap: null,
//   AddStarcraftCampaign: {
//     Rating: 0,
//     Matchup: '',
//     Description: '',
//     Introduction: '',
//     Version: ''
//   },
//   EditStarcraftCampaign: null,
//   AddStarcraftMod: {
//     Name: '',
//     Rating: 0,
//     Description: '',
//     Introduction: '',
//     Version: ''
//   },
//   EditStarcraftMod: null,
//   AddMuonlineTool: {
//     Credits: [''],
//     Archive: null,
//     Icon: null,
//     Rating: 0,
//     Description: '',
//     Introduce: '',
//     Version: ''
//   },
//   EditMuonlineTool: null,
//   AddMuonlineVersion: {
//     file: null,
//     Credits: [''],
//     Rating: 0,
//     Description: '',
//     Introduce: '',
//     Version: ''
//   },
//   EditMuonlineVersion: null,
//   AddDS9799VipSystem: {
//     name: '',
//     price: 0,
//     duration: 0,
//     type: 'Account'
//   },
//   EditDS9799VipSystem: null,
//   AddD2Mod: {
//     Archive: null,
//     Icon: null,
//     Background: null,
//     Name: '',
//     ModVersion: '1.08',
//     Version: '',
//     Overview: [''],
//     Description: '',
//     Rating: 0
//   },
//   EditD2Mod: null,
//   AddD2Tool: {
//     Archive: null,
//     Icon: null,
//     Name: '',
//     Description: '',
//     Overview: [''],
//     Rating: 0
//   },
//   EditD2Tool: null,
//   AddD2SurvivalKit: {
//     file: null,
//     Name: '',
//     Type: 'Character',
//     Description: '',
//     Overview: [''],
//     Rating: 0
//   },
//   EditD2SurvivalKit: null,
//   AddD2Character: {
//     file: '',
//     Name: '',
//     Title: 'No Title',
//     Class: 'Amazon',
//     Level: 0,
//     ModId: '',
//     Overview: [''],
//     Rating: 0,
//     IsCount: true
//   },
//   EditD2Character: null
// },

// import FormAddFlashGame from 'containers/Forms/FormAddFlashGame';
// import FormAddMusic from 'containers/Forms/FormAddMusic';

// import FormAddYugiohMod from 'containers/Forms/FormAddYugiohMod';
// import FormAddYugiohDeck from 'containers/Forms/FormAddYugiohDeck';
// import FormEditYugiohMod from 'containers/Forms/FormEditYugiohMod';
// import FormEditYugiohDeck from 'containers/Forms/FormEditYugiohDeck';

// import FormAddStarcraftMap from 'containers/Forms/FormAddStarcraftMap';
// import FormEditStarcraftMap from 'containers/Forms/FormEditStarcraftMap';
// import FormAddStarcraftCampaign from 'containers/Forms/FormAddStarcraftCampaign';
// import FormEditStarcraftCampaign from 'containers/Forms/FormEditStarcraftCampaign';
// import FormAddStarcraftMod from 'containers/Forms/FormAddStarcraftMod';
// import FormEditStarcraftMod from 'containers/Forms/FormEditStarcraftMod';
// import FormAddMuonlineTool from 'containers/Forms/FormAddMuonlineTool';
// import FormAddMuonlineVersion from 'containers/Forms/FormAddMuonlineVersion';
// import FormEditMuonlineTool from 'containers/Forms/FormEditMuonlineTool';
// import FormEditMuonlineVersion from 'containers/Forms/FormEditMuonlineVersion';

// import FormAddDs9799VipSystem from 'containers/Forms/FormAddDs9799VipSystem';
// import FormEditDs9799VipSystem from 'containers/Forms/FormEditDs9799VipSystem';

// import FormAddD2Mod from 'containers/Forms/FormAddD2Mod';
// import FormAddD2Tool from 'containers/Forms/FormAddD2Tool';
// import FormAddD2Character from 'containers/Forms/FormAddD2Character';
// import FormAddD2SurvivalKit from 'containers/Forms/FormAddD2SurvivalKit';
// import FormEditD2Mod from 'containers/Forms/FormEditD2Mod';
// import FormEditD2Tool from 'containers/Forms/FormEditD2Tool';
// import FormEditD2Character from 'containers/Forms/FormEditD2Character';
// import FormEditD2SurvivalKit from 'containers/Forms/FormEditD2SurvivalKit';

// const makeIcon = (name, ext) => {
//   const iconPath = 'app_modules/images/icons/';
//   let iconLink = `${iconPath}${name}`;
//   iconLink += ext ? ext : '.png';
//   return iconLink;
// };

// export default id => {
//   let modalDisplay = {
//     header: {
//       icon: '',
//       label: ''
//     },
//     body: () => null
//   };
//   switch (id) {
//     case 'addFlashGameModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Flash Game' },
//         body: FormAddFlashGame
//       };
//     case 'addYgoModModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Mod' },
//         body: FormAddYugiohMod
//       };
//     case 'addYgoDeckModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Add New Yugioh Deck' },
//         body: FormAddYugiohDeck
//       };
//     case 'editYgoModModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Mod' },
//         body: FormEditYugiohMod
//       };
//     case 'editYgoDeckModal':
//       return {
//         header: { icon: makeIcon('gamepad'), label: 'Edit Yugioh Deck' },
//         body: FormEditYugiohDeck
//       };
//     case 'addMusicModal':
//       return {
//         header: { icon: makeIcon('music'), label: 'Add New Song' },
//         body: FormAddMusic
//       };
//     case 'addStarcraftMapModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Map' },
//         body: FormAddStarcraftMap
//       };
//     case 'editStarcraftMapModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Map' },
//         body: FormEditStarcraftMap
//       };
//     case 'addStarcraftCampaignModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Campaign' },
//         body: FormAddStarcraftCampaign
//       };
//     case 'editStarcraftCampaignModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Campaign' },
//         body: FormEditStarcraftCampaign
//       };
//     case 'addStarcraftModModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Add Starcraft Mod' },
//         body: FormAddStarcraftMod
//       };
//     case 'editStarcraftModModal':
//       return {
//         header: { icon: makeIcon('starcraft'), label: 'Edit Starcraft Mod' },
//         body: FormEditStarcraftMod
//       };
//     case 'addMuonlineVersionModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Mu Version' },
//         body: FormAddMuonlineVersion
//       };
//     case 'addMuonlineToolModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Mu Tool' },
//         body: FormAddMuonlineTool
//       };
//     case 'editMuonlineVersionModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Mu Version' },
//         body: FormEditMuonlineVersion
//       };
//     case 'editMuonlineToolModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Mu Tool' },
//         body: FormEditMuonlineTool
//       };
//     case 'addDs9799VipSystemModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Add Vip System' },
//         body: FormAddDs9799VipSystem
//       };
//     case 'editDs9799VipSystemModal':
//       return {
//         header: { icon: makeIcon('mulogo'), label: 'Edit Vip System' },
//         body: FormEditDs9799VipSystem
//       };
//     case 'addD2ModModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Mod' },
//         body: FormAddD2Mod
//       };
//     case 'addD2ToolModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Tool' },
//         body: FormAddD2Tool
//       };
//     case 'addD2SurvivalKitModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Survival Kit' },
//         body: FormAddD2SurvivalKit
//       };
//     case 'addD2CharacterModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Add Diablo II Character' },
//         body: FormAddD2Character
//       };
//     case 'editD2ModModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Mod' },
//         body: FormEditD2Mod
//       };
//     case 'editD2CharacterModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Character' },
//         body: FormEditD2Character
//       };
//     case 'editD2SurvivalKitModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Survival Kit' },
//         body: FormEditD2SurvivalKit
//       };
//     case 'editD2ToolModal':
//       return {
//         header: { icon: makeIcon('diablo_2'), label: 'Edit Diablo II Tool' },
//         body: FormEditD2Tool
//       };
//     default:
//       return modalDisplay;
//   }
// };
